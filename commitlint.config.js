module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // override the default values so we can define our own scopes and scopes will not grow randomly :)
    "scope-enum": [
      2, // error
      "always",
      [
        // scopes
        "login",
        "friends",
        "tracking",
        "routes",
        "settings",
        "support",
        // scopes related to type 'build/ci/docs/chore'
        "npm",
        "readme",
        "changelog",
        "azure",
        "firebase"
      ]
    ]
  }
};
