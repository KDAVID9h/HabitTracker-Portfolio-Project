const translations = {
  /**
   * Authentication
   */

  // Email
email: {
  fr: 'Adresse e-mail',
  ewe: 'Mɛɖeŋɔmeɖe',
  en: 'Email address',
},
emailPlaceholder: {
  fr: 'jean@dupont.fr',
  ewe: 'kokou@togo.ewe',
  en: 'john@doe.com',
},

// Password
password: {
  fr: 'Mot de passe',
  ewe: 'Abitĩ',
  en: 'Password',
},
passwordConfirmation: {
  fr: 'Confirmation du mot de passe',
  ewe: 'Abitĩa kɛkɛ',
  en: 'Password confirmation',
},
forgotPassword: {
  fr: 'Mot de passe oublié?',
  ewe: 'Wòkãŋ abitĩ?',
  en: 'Forgotten your password?',
},
resetPassword: {
  fr: 'Réinitialiser le mot de passe',
  ewe: 'Fiadokui abitĩ',
  en: 'Reset password',
},
resetPasswordDescription: {
  fr: 'Entrez votre adresse e-mail pour réinitialiser votre mot de passe.',
  ewe: 'Zɔn mɛɖeŋɔmeɖe na fiadokui wòabitĩ.',
  en: 'Enter your email address to reset your password.',
},
resetPasswordButton: {
  fr: 'Envoyer',
  ewe: 'Di',
  en: 'Send',
},

// Sign in
signIn: {
  fr: 'Connexion',
  ewe: 'Kadodo',
  en: 'Sign in',
},
signInWith: {
  fr: 'Se connecter avec',
  ewe: 'Do ka kple',
  en: 'Sign in with',
},
signInAsGuest: {
  fr: 'Se connecter en tant qu’invité',
  ewe: 'Da asi le ƒe lĩka',
  en: 'Sign in as Guest',
},

// Sign out
signOut: {
  fr: 'Déconnexion',
  ewe: 'Dɔ asi ɖe',
  en: 'Logout',
},
signOutQuestion: {
  fr: 'Se déconnecter?',
  ewe: 'Dɔ asi ɖe?',
  en: 'Sign out?',
},
signOutDescription: {
  fr: `Pendant la déconnexion, vous ne pourrez pas gérer votre profil ou effectuer d'autres actions nécessitant une connexion.`,
  ewe: `Ne wòdɔ asi ɖe o, mèyinyia wòkló ɖokui ta ɖoɖo lɛ etɔ na duwo be esusũ wòasi le mɛ.`,
  en: `While signed out you are unable to manage your profile and conduct other activities that require you to be signed in.`,
},
signOutConfirm: {
  fr: 'Se déconnecter',
  ewe: 'Dɔ asi ɖe',
  en: 'Sign out',
},

// Sign up
signUp: {
  fr: 'Inscription',
  ewe: 'Ŋkɔŋlɔɖi',
  en: 'Sign up',
},
signUpWith: {
  fr: 'S’inscrire avec',
  ewe: 'Ŋlɔ ŋkɔ kple',
  en: 'Sign up with',
},
signUpAsGuest: {
  fr: 'S’inscrire en tant qu’invité',
  ewe: 'Ŋlɔ ŋkɔ abe amedzro ene',
  en: 'Sign up as Guest',
},


  // No account
noAccountQuestion: {
  fr: 'Vous n’avez pas de compte?',
  ewe: 'Mèŋlɔ ŋkɔ haɖe oa?',
  en: `Don't have an account?`,
},

// Already have account
hasAccountQuestion: {
  fr: 'Vous avez déjà un compte?',
  ewe: 'Wòɖe eɖokui?',
  en: 'Already have an account?',
},

/**
 * Appearance
 */

// Primary color
primaryColor: {
  fr: 'Couleur principale',
  ewe: 'Esiʋu ɖe',
  en: 'Primary color',
},

// Secondary color
secondaryColor: {
  fr: 'Couleur secondaire',
  ewe: 'Esiʋu ƒe',
  en: 'Secondary color',
},

// Dark mode
darkMode: {
  fr: 'Mode sombre',
  ewe: 'Dɔ le ɖe',
  en: 'Dark mode',
},
darkModeDescription: {
  fr: 'Réduit la quantité de lumière bleue',
  ewe: 'Mɛ aɖeɖeɖe ɖe',
  en: `Displays mostly dark surfaces`,
},
darkModeSwitch: {
  fr: 'Activer/désactiver le mode sombre',
  ewe: 'Dɔ le ɖe',
  en: 'Toggle dark mode',
},

// Reset theme
resetTheme: {
  fr: 'Réinitialiser le thème',
  ewe: 'Fiadokui tema',
  en: 'Reset theme',
},
resetThemeDescription: {
  fr: 'Les modifications seront réinitialisées',
  ewe: 'Nɛ ɖokui ɖe aɖeɖe',
  en: 'Changes will be reset',
},
resetThemeButton: {
  fr: 'Réinitialiser',
  ewe: 'Fiadokui',
  en: 'Reset',
},
resetThemeNoChanges: {
  fr: 'Aucune modification apportée',
  ewe: 'Mɛ ɖokui ɖe o',
  en: 'No changes made',
},

/**
 * Account
 */
deleteAccount: {
  fr: 'Supprimer le compte',
  ewe: 'Kpe eɖokui',
  en: 'Delete account',
},
deleteAccountQuestion: {
  fr: 'Supprimer le compte?',
  ewe: 'Kpe eɖokui?',
  en: 'Delete account?',
},
deleteAccountWarning: {
  fr: `Le compte supprimé ne peut pas être récupéré. Toutes les données seront supprimées.`,
  ewe: `Eɖokui kpe le aɖeɖe o. Nyateƒe nyui nyɔ ɖe.`,
  en: `Deleted accounts can't be recovered. All data associated with your account will be deleted.`,
},
deleteAccountWarningShort: {
  fr: `Toutes les données seront supprimées.`,
  ewe: `Nyateƒe nyui nyɔ ɖe.`,
  en: `Accounts can't be recovered`,
},
deleteAccountConfirmation: {
  fr: 'Supprimer',
  ewe: 'Kpe',
  en: 'Delete',
},
accountDeleted: {
  fr: 'Compte supprimé!',
  ewe: 'Eɖokui kpe!',
  en: 'Account deleted!',
},

/**
 * Performance
 */
dailyGoal: {
  fr: 'Objectif quotidien',
  ewe: 'Dziɖiwo ƒe kpɔe',
  en: 'Daily goal',
},
yourPerformance: {
  fr: 'Votre performance',
  ewe: 'Wòɖe kpɔe',
  en: 'Your performance',
},
goal: {
  fr: 'Objectif',
  ewe: 'Kpɔe',
  en: 'Goal',
},
overallPerformance: {
  fr: 'Performance globale',
  ewe: 'Kpɔe ƒe nɔƒe',
  en: 'Overall All Time Performance',
},

/**
 * Localization
 */
selectLanguage: {
  fr: 'Sélectionner la langue',
  ewe: 'Tsɔ gbɔgbɔ',
  en: 'Select language',
},

/**
 * Habits
 */
habit: {
  fr: 'Habitude',
  ewe: 'Nɔviɖe',
  en: 'Habit',
},

addHabit: {
  fr: 'Ajouter une habitude',
  ewe: 'Tsɔ nɔviɖe',
  en: 'Add habit',
},
manageHabits: {
  fr: 'Gérer les habitudes',
  ewe: 'Tɔ nɔviɖe',
  en: 'Manage habits',
},

createNewHabit: {
  fr: 'Créer une nouvelle habitude',
  ewe: 'Tɔ nɔviɖe ƒe',
  en: 'Create new habit',
},
createHabit: {
  fr: 'Créer une habitude',
  ewe: 'Tɔ nɔviɖe',
  en: 'Create habit',
},
habitNameLabel: {
  fr: 'Nom de l’habitude',
  ewe: 'Nɔviɖe dzɔ',
  en: 'Habit name',
},
habitDescriptionLabel: {
  fr: 'Description',
  ewe: 'Xɔxɔe',
  en: 'Description',
},
habitFrequencyLabel: {
  fr: 'Fréquence',
  ewe: 'Fɛkuɛnsi',
  en: 'Frequency',
},
habitAdded: {
  fr: 'Habitude ajoutée!',
  ewe: 'Nɔviɖe tsɔ!',
  en: 'Habit added!',
},

editHabit: {
  fr: 'Modifier l’habitude',
  ewe: 'Tɔ nɔviɖe',
  en: 'Edit habit',
},
saveHabit: {
  fr: 'Enregistrer l’habitude',
  ewe: 'Dɔ nɔviɖe',
  en: 'Save habit',
},
habitSaved: {
  fr: 'Habitude enregistrée!',
  ewe: 'Nɔviɖe dɔ!',
  en: 'Habit saved!',
},

deleteHabitQuestion: {
  fr: 'Supprimer',
  ewe: 'Kpe',
  en: 'Delete',
},
deleteHabitWarning: {
  fr: `L’habitude supprimée ne peut pas être récupérée. Toutes les données seront supprimées.`,
  ewe: `Nɔviɖe kpe le aɖeɖe o. Nyateƒe nyui nyɔ ɖe.`,
  en: `Deleted habit can't be recovered. All data associated with this habit will be deleted.`,
},
deleteHabitConfirmation: {
  fr: 'Supprimer',
  ewe: 'Kpe',
  en: 'Delete',
},
habitDeleted: {
  fr: 'Habitude supprimée!',
  ewe: 'Nɔviɖe kpe!',
  en: 'Habit deleted!',
},
deleteHabit: {
  fr: 'Supprimer l’habitude',
  ewe: 'Kpe nɔviɖe',
  en: 'Delete habit',
},

habitList: {
  fr: 'Liste des habitudes',
  ewe: 'Nɔviɖe lɔlɔ̃',
  en: 'Habit list',
},

  /**
 * Landing page
 */
landingQuoteFirstLine: {
  fr: 'Nous créons d’abord nos habitudes,',
  ewe: 'Míewɔa míaƒe numamewo gbã,',
  en: 'We first make our habits,',
},
landingQuoteSecondLine: {
  fr: 'puis nos habitudes nous façonnent.',
  ewe: 'emegbe míaƒe numamewoe trɔa asi le mía ŋu.',
  en: 'then our habits make us.',
},
getStarted: {
  fr: 'Commencez maintenant',
  ewe: 'Dze egɔme fifia',
  en: 'Get started',
},

/**
 * Dates
 */
lastWeek: {
  fr: 'Semaine dernière',
  ewe: 'Dziɖi aɖe',
  en: 'Last week',
},
thisWeek: {
  fr: 'Cette semaine',
  ewe: 'Dziɖi aɖe yi',
  en: 'This week',
},
today: {
  fr: 'Aujourd’hui',
  ewe: 'Eʋeɖi',
  en: 'Today',
},

/**
 * Other
 */
settings: {
  fr: 'Paramètres',
  ewe: 'Nɔviɖe',
  en: 'Settings',
},
delete: {
  fr: 'Supprimer',
  ewe: 'Kpe',
  en: 'Delete',
},
or: {
  fr: 'Ou',
  ewe: 'Ana',
  en: 'Or',
},

// Not found
notFoundMessage: {
  fr: 'Il n’y a rien ici!',
  ewe: 'Eyi ɖe nɔ nu!',
  en: 'Are you lost?',
},
goBack: {
  fr: 'Retourner',
  ewe: 'Fã le',
  en: 'Go back',
},

// Habit not found
habitNotFound: {
  fr: 'Hmm, cette habitude n’existe pas...',
  ewe: 'Hmm, nɔviɖe kple o...',
  en: `This habit doesn't exist!`,
},

// No habits
noHabitsTitle: {
  fr: 'Aucune habitude',
  ewe: 'Mɛ nɔviɖe',
  en: 'There are no habits',
},
noHabitsDescription: {
  fr: 'Il semble que vous n’avez pas encore d’habitudes, pourquoi ne pas en ajouter une?',
  ewe: 'Mɛ nyateƒe wòɖe nɔviɖe kple, ɖe ŋkɔ kɔ si wòtsi?',
  en: `It looks like you don't have any habits yet, why don't you add one?`,
},

// Github repo
githubRepo: {
  fr: 'Dépôt GitHub',
  ewe: 'GitHub ƒe nudzraɖoƒe',
  en: 'GitHub repository',
},
};

export { translations };
