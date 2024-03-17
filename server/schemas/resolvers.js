const { User, Recipe } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('recipes');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('recipes');
      },
      recipes: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Recipe.find(params).sort({ createdAt: -1 });
      },
      recipe: async (parent, { recipeId }) => {
        return Recipe.findOne({ _id: recipeId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('recipes');
        }
        throw AuthenticationError;
      },
    },
  
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
        },
        addRecipe: async (parent, { recipeTitle, description, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, instructions }, context) => {
            if (context.user) {
              const recipe = await Recipe.create({
                recipeTitle,
                description,
                ingredient1,
                ingredient2,
                ingredient3,
                ingredient4,
                ingredient5,
                ingredient6,
                ingredient7,
                ingredient8,
                ingredient9,
                ingredient10,
                instructions,
                recipeAuthor: context.user.username,
              });

              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { recipes: recipe._id } }
              );
      
              return recipe;
            }
            throw AuthenticationError;
        },
        removeRecipe: async (parent, { recipeId }, context) => {
            if (context.user) {
              const recipe = await Recipe.findOneAndDelete({
                _id: recipeId,
                recipeAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { recipes: recipe._id } }
              );
      
              return recipe;
            }
            throw AuthenticationError;
        },
    },
};


module.exports = resolvers;