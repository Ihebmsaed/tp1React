import React, { Component } from "react";
//import { searchById } from "../Ecmascript/fonction.js"

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
    render() { 
        const words = ["iheeb", "oussema", "semer", "adem"];
        console.log("Mot le plus long:", this.findLongestWord(words));


        const tab = [["iheb", "oussema", "khalil"], ["iheb", "oussema"], ["iheb", "oussema", "khalil", "adem"]];
        console.log("Occurrences des mots:", this.countOccurrences(tab));


        const studentScores = [30, 45, 60, 80, 20, 50];
        console.log("Total:", this.calculateTotalScore(studentScores));


        let Id = 0;
        const Tab = [
            { id: ++Id, name: "iheb" },
            { id: ++Id, name: "oussema" },
            { id: ++Id, name: "semer" }
        ];
        Tab.push({ id: ++Id, name: "meher" });
        Tab.push({ id: ++Id, name: "skander" });
        console.log("Tableau:", Tab);

        //const user = searchById(Tab, 3);
        //console.log("Élément trouvé:", user );
    }

    
        
    }

