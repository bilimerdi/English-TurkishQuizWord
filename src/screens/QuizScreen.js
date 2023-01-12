import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
    if (word !== 10) {
      setWord(word + 1);
      setOptions(generateOptionsAndShuffle(words[word + 1]));
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        words && (
          <View style={styles.parent}>
            <Result score={score}></Result>
            {word === 10 ? (
              <View style={styles.resultBorderStyle}>
                <Image
                  source={require("../../assets/image/wallpaper.jpg")}
                  style={styles.ImageStyle}
                />

                <TouchableOpacity
                  onPress={() => navigation.navigate("Main")}
                  style={styles.ButtonStyle}
                >
                  <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
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
                  {word !== 10 && (
                    <TouchableOpacity
                      style={styles.optionStyle}
                      onPress={handleNextPress}
                    >
                      <Text style={styles.optionTextStyle}>Sonraki</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            )}
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: "#9f8cca",
    height: "100%",
  },
  questionBorderStyle: {
    margin: 30,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#ab3cfc",
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
    backgroundColor: "#7e6df3",
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
    backgroundColor: "#ab3cfc",
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
  resultBorderStyle: {
    backgroundColor: "#9f8cca",
    height: "100%",
    alignItems: "center",
  },
  ButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#ab3cfc",
    width: 310,
    height: 70,
    borderRadius: 50,
    /*add shadow*/
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  ButtonTextStyle: {
    fontSize: 30,
  },
  ImageStyle: {
    marginTop: 30,
    marginBottom: 50,
    height: "50%",
    width: "85%",
  },
});

export default QuizScreen;
