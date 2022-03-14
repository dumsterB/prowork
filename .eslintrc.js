module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/multi-word-component-names': ['error', {
            'ignores': [
                'Default', 'Authorization', 'About', 'Home', 'Blog', 'Investors', 'Vacancies', 'Agreement', 'Data', 'Services',
                'Utilization', 'Regions', 'Occupations','Help','Advertising','Error','TheCountries','Statists','Company'
            ]
        }]
    }
}
