module.exports = {
    stories: ["../src/presentation/components/**/*stories.@(tsx|jsx|mdx)"],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-notes/register',
    ],
};