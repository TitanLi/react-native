# react-native

## 所需套件
1. **Node**
2. **Yarn**
3. **react-native-cli**

## 環境安裝
[React Native](https://reactnative.cn/docs/0.51/getting-started.html#content)

1. 使用npm安裝Yarn、React Native
```
$ npm install -g yarn react-native-cli
```
2. 安裝java環境
```
$ sudo apt-get install default-jdk
```
**可使用cmd來確認javac版本**
```
$ javac -version
```

3. 安裝Android Studio
[Android Studio](https://developer.android.com/studio/)

**安裝步驟及套件選擇請參考**

[Android Studio套件選擇](https://reactnative.cn/docs/0.51/getting-started.html#content)

4. ANDROID_HOME環境參數設定
```
# 如果你不是透過Android Studio安装的sdk，則其路徑可能不同，請自行確認清楚
# 將下方命令加入~/.bashrc、~/.bash_profile檔案中
export ANDROID_HOME=~/Android/Sdk
```
**然後使用下列指令，讓命令立即生效**
```
$ source ~/.bash_profile
```
**可使用下方指令確認環境變數是否正確設置**
```
$ echo $ANDROID_HOME
```

5. 將Android SDK的Tools目錄添加到環境變數PATH中
```
# 請確認路徑是否正確
PATH="~/Android/Sdk/tools:~/Android/Sdk/platform-tools:${PATH}"
export PATH
```

6. 安裝結果測試
```
$ react-native init AwesomeProject
$ cd AwesomeProject
$ react-native run-android
```

7. 當進行apk上傳失敗處理方法

**方法一：**
查看連接裝置狀態
```
$ adb devices
List of devices attached
SKKNGAMZ99999999	device
```

**方法二：**

當出現下方錯誤訊息
```
unable to load script from assets index.android.bundle
```
解決方式
```
1.(in project directory) mkdir android/app/src/main/assets
2.react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3.react-native run-android
```