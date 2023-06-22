# English-Turkish Quiz Word Uygulaması

Bu uygulama, React Native ve Expo kullanılarak geliştirilmiş bir Quiz uygulamasıdır. Uygulama, kullanıcılara İngilizce kelimeleri öğrenmeleri için etkileşimli bir deneyim sunar.

Uygulama, soru ve cevapları içeren bir API'ye ihtiyaç duyar. Bu amaçla, JSON Server kullanılmıştır. Ayrıca, uygulamayı ağa bağlamak için ngrok.exe kullanılmış ve API'nin dış dünyaya erişilebilir hale getirilmesi sağlanmıştır.

## Proje GitHub Linki

Proje kaynak kodlarına [bu GitHub linkinden](https://github.com/bilimerdi/English-TurkishQuizWord) erişebilirsiniz.

## Uygulama Özellikleri

- Kullanıcılara İngilizce kelimeleri öğrenme fırsatı sunar.
- Her soruda 5 şık arasından doğru cevabı seçmek gerekmektedir.
- Her doğru cevap kullanıcının puanını 10 artırır.
- Toplamda 10 soru sorulur ve quizin sonunda kullanıcının puanı gösterilir.

## Kurulum Adımları

1. Projeyi GitHub reposundan klonlayın:

git clone https://github.com/bilimerdi/English-TurkishQuizWord.git


2. Gerekli bağımlılıkları yüklemek için proje dizininde aşağıdaki komutu çalıştırın:

npm install


3. JSON Server'ı başlatmak için aşağıdaki komutu çalıştırın:

json-server --watch db.json --port 3001


4. Expo sunucusunu başlatmak için aşağıdaki komutu çalıştırın:

expo start


Bu adımları tamamladıktan sonra uygulamayı Expo Client uygulaması veya emülatör üzerinde çalıştırabilirsiniz.

---

İyi okumalar:)


