## PXC —— A basic community demo~


### Before you use it, open the next two directories: client and server, and install their dependencies. 

#### In the server directory
```
npm install
node server
```

#### Compiles and hot-reloads for development ———— In the client directory.
```
npm run serve
```


### 1 ———— Home 
#### Edit by Zhou Zhiyuan

#### 1) It contains banner, hot issues, and some recommends users' moments. (Though the moments' data is fack.)
#### 2) Hot issues module shows several keywords, the backgrounds have their own unique animations.
#### 3) Pull up the screen, you can slide the view with your finger operation.
#### 4) As it scrolls to bottom and overflow, we can pull-up ad refresh the view. (By adding the "scroll" and "touchend" events on "better-scroll" framework.)


### 2 ———— Topic
#### Edit by Yu GongYao

#### 1) Show the topic details.
#### 2) It contains today's topic and the past topics.
#### 3) After a user sending his article, the data will show in "Today's topic".


### 3 ———— Send
#### Edit by Chen Siji

#### 1) We can send our article with pictures online.
#### 2) We can choose : located the address or not?   origin author or share?


### 4 ———— Messages
#### Edit by Chen Siji
#### 1) After users login, they can chat online. But we only finished group chat.


### 5 ———— Mine
#### 1) Styles were writed by Yu Gongyao. Data was operated by Zhou Zhiyuan.
#### 2) After login, show users' personal infomation including nickname, birthday, description, telephone...
#### 3) There's a router link to personal view, which shows user's history moments(sorts by published-time)
#### 4) Another views can modify one's personal information. As a user send the submit order, our database will refresh ontime, at the same time, we can see the related data on views. (By vuex)
#### 5) Contact us. A page to submit user's suggestion.
#### 6) Operators' Center.
#### 7) VIP Center (Waiting to operate)


## Project Division
### Yu Gongyao ———— Captain. Config the git store. Topic module, Mine module.
### Chen Siji ———— Send files and text to server. Group chat online.
### Zhou Zhiyuan ———— Home module, database, server.
