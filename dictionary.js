export const dictionary = {
    ES: {
        subtitle: "Analista de Sistemas",
        about: "Sobre mí",
        skills: "Conocimientos",
        projects: "Proyectos",
        contact: "Contactame",
        techs: "Otros",
        mailText1: "¡Copiado ",
        mailText2: " correctamente!",
        number: "Número",
        great: "¡Genial!",
    },
    EN: {
        subtitle: "Systems Analyst",
        about: "about",
        skills: "skills",
        projects: "Projects",
        contact: "Contact me",
        techs: "Other",
        mailText1: "Copied ",
        mailText2: " correctly!",
        number: "Phone Number",
        great: "Great!",
    }
};

export const exportDictionary = (lang, word) => {
    return dictionary[lang][word].toUpperCase();
};
