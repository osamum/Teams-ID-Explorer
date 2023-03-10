# Teams ID Explorer の使い方

Teams ID Explorer の使い方について説明します。

## 利用開始方法

Teams ID Explorer の利用を開始するには、Azure Active Directory にて管理者の同意を与える必要があります。

手順は以下のとおりです。

1. Web ブラウザーで [Teams ID Explorer](https://osamum.github.io/Teams-ID-Explorer/) にアクセスします

2. 画面左上の \[**ログイン**\] リンクをクリックし、Office 365 の管理者アカウントでログインします

    ログインの際、管理者の同意を求めるダイアログボックスが表示されるので \[**承諾**\] ボタンをクリックします    

    <img src="images/login-jp.png" width="700px" >

3. Teams ID Explorer に表示されるメッセージボックスの \[OK\] ボタンをクリックするか、Web ブラウザーで [**Azure ポータル**](https://portal.azure.com) に管理者アカウントでログインし、\[Azure Directory\] - \[[**エンタープライズアプリケーション**](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/) \] の画面を表示します

4. アプリケーションの一覧が表示されるので、**Teams-ID-Explorer** をクリックします

5. Teams-ID-Explorer の概要画面に遷移するので、画面左側のメニューバーより \[**アクセス許可**\] をクリックします

6. **アクセス許可** の画面が表示されるので、\[(現在のテナント名) **に管理者の同意を与えます**\] ボタンをクリックします

    <img src="images/adminConsent-jp.png" width="700px">

    ポップアップ ダイアログボックスが表示されるので、\[**承諾**\] ボタンをクリックしてください。

以上で**管理者の同意**の作業は完了です。

再度 [Teams ID Explorer](https://osamum.github.io/Teams-ID-Explorer/) にアクセスし、画面のリフレッシュし、**ログイン** リンクをクリックすると UI に Teams の情報がロードされ、利用を開始することができます。

<br>

## 機能一覧

1. [ログイン](#1-%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3)
2. [**アカウント情報の表示**リンク](#-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E6%83%85%E5%A0%B1%E3%81%AE%E8%A1%A8%E7%A4%BA-%E3%83%AA%E3%83%B3%E3%82%AF)
3. [\[**チーム**\] タブ](#-%E3%83%81%E3%83%BC%E3%83%A0-%E3%82%BF%E3%83%96)
4. [\[**チャット**\] タブ](#-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88-%E3%82%BF%E3%83%96)
5. [エンドポイント バー](#-%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88-%E3%83%90%E3%83%BC)
6. [コピーボタン](#-%E3%82%B3%E3%83%94%E3%83%BC%E3%83%9C%E3%82%BF%E3%83%B3)
7. [Graph エクスプローラー ボタン](#-graph-%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC-%E3%83%9C%E3%82%BF%E3%83%B3)
8. [ドキュメント参照ボタン](#-%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E5%8F%82%E7%85%A7%E3%83%9C%E3%82%BF%E3%83%B3)
9. [\[**HTTP**\] タブ](#-http-%E3%82%BF%E3%83%96)
10. [\[**Feature**\] タブ](#-feature-%E3%82%BF%E3%83%96)

<br>

## 1. ログイン

Teams ID Explorer の使用を開始するには、[Teams ID Explorer がホストされている URL](https://osamum.github.io/Teams-ID-Explorer/) に Web ブラウザーでアクセスします。

画面に Teams ID Explorer の UI が表示されるので、画面左上の \[**ログイン**\] リンクをクリックし、Office 356 の管理者アカウントで認証を行ってください。

<img src="images/login-jp.png" width="700px" >

ログインの際、Azure Active の **アクセス許可の要求** ダイアログボックスが表示される場合は \[承諾\] ボタンをクリックしてください。

認証が正しく行われると画面に情報がロードされます。

<br>

以降、以下の画像を使用して説明します。

<img src="images/UI_feature-jp.png" width="1000px">

<br>

## ② **アカウント情報の表示** リンク

現在のユーザーアカウントのさまざまな ID やアクセストークンを表示します。

<br>

## ③ \[**チーム**\] タブ

チーム、チャネルをツリー表示し、チャネルに紐づいたメンバー、メッセージ、ストレージを選択できるようにします。

<br>

## ④ \[**チャット**\] タブ

チャットを一覧表示し、チャットに紐づいたメンバー、メッセージを選択できるようにします。

<br>

## ➄ エンドポイント バー

UI の操作によって呼び出された Graph API のエンドポイントと HTTP メソッドが表示されます。

<br>

## ⑥ コピーボタン

エンドポイント バーに表示されている Graph API のエンドポイントをクリップボードに送ります。

<br>

## ➆ Graph エクスプローラー ボタン

エンドポイント バーに表示されている Graph API のエンドポイントを Graph Explorer に送り、新規タブで表示します。

<br>

## ⑧ ドキュメント参照ボタン

UI の操作によって呼び出された Graph API のドキュメントを新規タブで表示します。

<br>

## ➈ \[HTTP\] タブ

実行した Graph API のリクエストボディと、レスポンスボディに含まれる JSON をそれぞれ表示します。

<img src="images/httpTab-jp.png" width="1000px">

<br>

## ➉ \[Feature\] タブ

Graph API が返した JSON を整形して表示します。

<img src="images/featureTab-jp.png" width="1000px">

このタブ内の表示では、Teams の Office 365 のリソースのアクセスするための webUrl や、ストレージからファイルをダウンロードするための @microsoft.graph.downloadUrl、ミーティングに参加するための joinWebUrl 等の機能が有効に機能します。

また、メッセージを選択した際の \[**Feature**\] タブでは新規のメッセージを投稿することができます。

<img src="images/post_newMessage-jp.png" width="700px">

その他、\[**Feature**\] タブに表示されるリンクの機能はここで紹介するものが全てではなく、さまざまな機能が割り振られているので実際にクリックして確認してください。

<img src="images/show_userPicture.png" width="700px">

<br>

---
🏠 [**Readme に戻る**](README.md)




