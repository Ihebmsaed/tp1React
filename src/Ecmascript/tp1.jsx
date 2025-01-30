import React, { Component } from "react";


export default class Tp1 extends Component {
    
    findLongestWord = (words) => {
        let wordsWithLength = words.map(word => ({ mot: word, longueur: word.length }));
        let longestWordObj = wordsWithLength.reduce((max, current) => current.longueur > max.longueur ? current : max);
        return longestWordObj;
    };

    
    countOccurrences = (tab) => {
        const occurrences = tab.flat().reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
        return Object.entries(occurrences).map(([word, count]) => `${word}, ${count}`);
    };

    calculateTotalScore = (student) => {
        return student.map(score => score < 50 ? score + 15 : score)
                      .filter(score => score >= 50)
                      .reduce((total, score) => total + score, 0);
    };

    componentDidMount() {
        // Exécution des fonctions et affichage des résultats dans la console
        const words = ["chat", "éléphant", "ordinateur", "javascript"];
        console.log("Mot le plus long:", this.findLongestWord(words));

        const tab = [["iheb", "oussema", "khalil"], ["iheb", "oussema"], ["iheb", "oussema", "khalil", "adem"]];
        console.log("Occurrences des mots:", this.countOccurrences(tab));

        const studentScores = [30, 45, 60, 80, 20, 50];
        console.log("Total:", this.calculateTotalScore(studentScores));

        let lastId = 0;
        const Tab = [
            { id: ++lastId, name: "iheb" },
            { id: ++lastId, name: "oussema" },
            { id: ++lastId, name: "semer" }
        ];
        Tab.push({ id: ++lastId, name: "meher" });
        Tab.push({ id: ++lastId, name: "skander" });
        console.log("Tableau:", Tab);

        //const user = searchById(Tab, 3);
        //console.log("Élément trouvé:", user );
    }

    render() {
        
    }
}
