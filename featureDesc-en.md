# How to use Teams ID Explorer

Learn how to use Teams ID Explorer.

## How to get started

To get started with Teams ID Explorer, you need to grant admin consent in Azure Active Directory.

The steps are follows:

1. Access [Teams ID Explorer](https://osamum.github.io/Teams-ID-Explorer/) in a web browser.

2. Click the \[**Login**\] link on the top left of the screen and log in with your Office 365 administrator account.

    When logging in, a dialog box will appear asking for administrator consent, so click the \[**Accept**\] button. 

    <img src="images/login-en.png" width="700px" >

3. Click the \[OK\] button in the message box displayed in Teams ID Explorer, or log in to the [**Azure portal**](https://portal.azure.com) with an administrator account on a web browser and display the \[Azure Active Directory\] - \[[**Enterprise Applications**](https://portal.azure.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview/menuId~/)\] screen.

4. A list of applications will be displayed. Click **Teams-ID-Explorer**.

5. You will be taken to the Teams-ID-Explorer **overview** screen, so click \[**Permission**\] from the menu bar on the left side of the screen.

6. The **Permission** screen is displayed. Click the \[**Grant admin consent for (current tenant name)**\] button.

    <img src="images/adminConsent-en.png" width="700px">

    A pop-up dialog box will appear, click the \[**Accept**\] button.

This completes the work for **administrator consent**.

Visit the [Teams ID Explorer](https://osamum.github.io/Teams-ID-Explorer/) again, refresh the screen, click the **login** link and the UI will load with your Teams information and you can start using it.


<br>

## Features list

1. [login](#1-%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3)
2. [**View account information** link](#-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E6%83%85%E5%A0%B1%E3%81%AE%E8%A1%A8%E7%A4%BA-%E3%83%AA%E3%83%B3%E3%82%AF)
3. [\[**Team**\] tab](#-%E3%83%81%E3%83%BC%E3%83%A0-%E3%82%BF%E3%83%96)
4. [\[**Chat**\] tab](#-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88-%E3%82%BF%E3%83%96)
5. [Endpoint bar](#-%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88-%E3%83%90%E3%83%BC)
6. [Copy button](#-%E3%82%B3%E3%83%94%E3%83%BC%E3%83%9C%E3%82%BF%E3%83%B3)
7. [Graph Explorer button](#-graph-%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC-%E3%83%9C%E3%82%BF%E3%83%B3)
8. [Document browse button](#-%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E5%8F%82%E7%85%A7%E3%83%9C%E3%82%BF%E3%83%B3)
9. [\[**HTTP**\] tab](#-http-%E3%82%BF%E3%83%96)
10. [\[**Feature**\] tab](#-feature-%E3%82%BF%E3%83%96)

<br>

## 1. Login

To get started with Teams ID Explorer, go to [the URL where Teams ID Explorer is hosted](https://osamum.github.io/Teams-ID-Explorer/)  in a web browser.

When the Teams identity explorer UI appears on the screen, click the \[**Login**\] link in the upper left corner of the screen to authenticate with your Office 356 administrator account.


<img src="images/login-en.png" width="700px" >

When the Teams identity explorer UI appears on the screen, click the Login link in the upper left corner of the screen to authenticate with your Office 356 administrator account.


When logging in, if the Azure Active Directory \[Request Permissions\] dialog box appears, click the \[Accept\] button.

If authentication is successful, the screen is loaded with information.

<br>

From here, I will use the image below to explain.

<img src="images/UI_feature-en.png" width="1000px">

<br>

## ??? **View account information** link

View various IDs and access tokens for the current user account.

<br>

## ??? \[**Team**\] tab

Displays a tree view of teams and channels, allowing you to select members, messages, and storage associated with channels.

<br>

## ??? \[**Chat**\] tab

Lists chats and allows you to select members and messages associated with chats.

<br>

## ??? Endpoint bar

Displays the Graph API endpoints and HTTP methods invoked by UI interactions.

<br>

## ??? Copy button

Sends the Graph API endpoint displayed in the endpoint bar to the clipboard.

<br>

## ??? Graph Explorer button

Sends the Graph API endpoint displayed in the endpoint bar to Graph Explorer and displays it in a new tab.

<br>

## ??? Document browse button

Displays the documentation for the Graph API called by UI manipulation in a new tab.

<br>

## ??? \[HTTP\] tab

Displays the request body of the executed Graph API and the JSON contained in the response body, respectively.

<img src="images/httpTab-en.png" width="1000px">

<br>

## ??? \[Feature\] tab

Format and display the JSON returned by the Graph API.

<img src="images/featureTab-en.png" width="1000px">

Within this tab, features such as webUrls to access Office 365 resources in Teams, @microsoft.graph.downloadUrls to download files from storage, and joinWebUrls to join meetings work effectively.

You can also post a new message on the \[**Feature**\] tab when you select a message.

<img src="images/post_newMessage-en.png" width="700px">

In addition, the functions of the links displayed on the \[**Feature**\] tab are not all those introduced here, and various functions are assigned, so click on them to check them out.



<img src="images/show_userPicture-en.png" width="700px">

<br>

---
???? [**Back to Readme**](README.md)




