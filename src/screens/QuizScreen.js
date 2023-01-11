import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import jsonServer from "../api/jsonServer";
import Result from "../components/Result";
import Loading from "../components/Loading";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const QuizScreen = ({ navigation }) => {
  const [words, setWords] = useState();
  const [word, setWord] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await jsonServer.get("/memory");
    const data = res.data;
    setWords(data);
    setOptions(generateOptionsAndShuffle(data[0]));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const generateOptionsAndShuffle = (__vocable) => {
    const options = [...__vocable.incorrect_answers];
    options.push(__vocable.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleNextPress = () => {
    setWord(word + 1);
    setOptions(generateOptionsAndShuffle(words[word + 1]));
  };

  const handleSelectedOption = (__option) => {
    if (__option === words[word].correct_answer) {
      setScore(score + 10);
    }
    if (word !== 9) {
      setWord(word + 1);
      setOptions(generateOptionsAndShuffle(words[word + 1]));
    }
    if (word === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    const delay = () => {
      navigation.navigate("Result");
    };
    setTimeout(delay, 1400);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        words && (
          <View style={styles.parent}>
            <Result score={score}></Result>
            <View style={styles.questionBorderStyle}>
              <Text style={styles.questionTextStyle}>
                Aşağıdaki kelimenin türkçe karşılığı hangi şıkta doğru
                verilmiştir?
              </Text>
            </View>
            <View style={styles.wordBorderStyle}>
              <Text style={styles.wordTextStyle}>{words[word].word}</Text>
            </View>
            <View style={styles.optionBorderStyle}>
              <TouchableOpacity
                style={styles.optionStyle}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.optionTextStyle}>{options[0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionStyle}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.optionTextStyle}>{options[1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionStyle}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.optionTextStyle}>{options[2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionStyle}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.optionTextStyle}>{options[3]}</Text>
              </TouchableOpacity>
              {word !== 9 && (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={handleNextPress}
                >
                  <Text style={styles.optionTextStyle}>Next</Text>
                </TouchableOpacity>
              )}
              {word === 9 && (
                <TouchableOpacity
                  style={styles.optionStyle}
                  onPress={handleShowResult}
                >
                  <Text style={styles.optionTextStyle}>BiTİR</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: "#64DFDF",
    height: "100%",
  },
  questionBorderStyle: {
    margin: 30,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 16,
    padding: 20,
  },
  questionTextStyle: {
    fontSize: 35,
    textAlign: "center",
  },
  wordBorderStyle: {
    margin: 100,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 16,
    padding: 15,
  },
  wordTextStyle: {
    fontSize: 30,
    textAlign: "center",
  },
  optionBorderStyle: {
    marginTop: 10,
  },
  optionStyle: {
    margin: 30,
    marginTop: -10,
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 16,
    padding: 15,
  },
  optionTextStyle: {
    fontSize: 25,
    textAlign: "center",
  },
  parent: {
    height: "100%",
  },
});

export default QuizScreen;
