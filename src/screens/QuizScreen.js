import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
    
const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const QuizScreen=({navigation})=>{
    const [words,setWords]=useState();
    const [word,setWord]=useState(0);
    const [options,setOptions]=useState([]);
    const [score,setScore]=useState(0);
    const fetchData= async()=>{
        const url ='https://b8ad-2a02-4e0-2d5d-704-a0a3-86c1-aff9-8cdb.eu.ngrok.io/memory';
        const res = await fetch(url);
        const data =await res.json();
        setWords(data);
        setOptions(generateOptionsAndShuffle(data[0]));
    };
    useEffect(()=>{
        fetchData();
    },[])

    const generateOptionsAndShuffle=(__vocable)=>{
        const options=[...__vocable.incorrect_answers];
        options.push(__vocable.correct_answer);
        shuffleArray(options);
        return options;
    };


    const handleNextPress=()=>{
        setWord(word+1);
        setOptions(generateOptionsAndShuffle(words[word+1]));
    };

    const handleSelectedOption=(__option)=>{
        if(__option===words[word].correct_answer){
            setScore(score+10)
        }
        if(word!==9){
            setWord(word+1);
            setOptions(generateOptionsAndShuffle(words[word+1]));
        }
        if(word===9){
            handleShowResult();
        }
    };

    const handleShowResult=()=>{
        navigation.navigate('Result')
    }
    return(
        <View style={styles.container}>
            {words && (
            <View style ={styles.parent}>
                <View style={styles.questionBorderStyle}>
                    <Text style={styles.questionTextStyle}>Aşağıdaki kelimenin türkçe karşılığı hangi şıkta doğru verilmiştir?</Text>
                </View>
                <View style={styles.wordBorderStyle}>
                    <Text style={styles.wordTextStyle}>{words[word].word}</Text>
                </View>
                <View style={styles.optionBorderStyle}>
                    <TouchableOpacity style={styles.optionStyle} onPress={()=>handleSelectedOption(options[0])}>
                        <Text style={styles.optionTextStyle}>{options[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionStyle} onPress={()=>handleSelectedOption(options[1])}>
                        <Text style={styles.optionTextStyle}>{options[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionStyle} onPress={()=>handleSelectedOption(options[2])}>
                        <Text style={styles.optionTextStyle}>{options[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionStyle} onPress={()=>handleSelectedOption(options[3])}>
                        <Text style={styles.optionTextStyle}>{options[3]}</Text>
                    </TouchableOpacity>
                    {word !==9 &&  <TouchableOpacity style={styles.optionStyle} onPress={handleNextPress}>
                                        <Text style={styles.optionTextStyle}>Next</Text>
                                    </TouchableOpacity>
                    }
                    {word ===9 &&  <TouchableOpacity style={styles.optionStyle} onPress={handleShowResult}>
                                        <Text style={styles.optionTextStyle}>SONUÇLARI GÖRÜNTÜLE</Text>
                                    </TouchableOpacity>
                    }
                </View>
            </View>
            )}
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        paddingTop:100,
        backgroundColor:"#64DFDF",
        height:"100%"
    },
    questionBorderStyle:{
        margin:30,
        alignItems:"center",
        backgroundColor:"#2196F3",
        borderRadius:16,
        padding:20,
    },
    questionTextStyle:{
        fontSize:35,
        textAlign:"center",
    },
    wordBorderStyle:{
        margin:100,
        marginTop:20,
        marginBottom:20,
        alignItems:"center",
        backgroundColor:"red",
        borderRadius:16,
        padding:15,
    },
    wordTextStyle:{
        fontSize:30,
        textAlign:"center",
    },
    optionBorderStyle:{
        marginTop:50
    },
    optionStyle:{
        margin:30,
        marginTop:-10,
        alignItems:"center",
        backgroundColor:"#2196F3",
        borderRadius:16,
        padding:15,
    },
    optionTextStyle:{
        fontSize:25,
        textAlign:"center",
    },
    parent:{
        height:"100%"
    }
});

export default QuizScreen;