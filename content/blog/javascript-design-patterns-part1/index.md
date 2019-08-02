---
title: JavaScript Design Patterns -- Part 1
date: '2019-07-31'
image: 'https://uploads.toptal.io/blog/image/125783/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png'
tags: ['FrontEnd','JavaScript','design-pattern']
---
> A **design pattern** is a term used in software engineering for a general reusable solution to a commonly occurring problem in software design.<br>設計模式在軟體工程上歸納出一般可復用的方案，用於解決軟體設計上常見的問題。）

你可能會懷疑為什麼要學習設計模式？對我來說有什麼幫助？其實設計模式就很像你今天要從家裡到公司很有很多條路可以選擇，你可以搭捷運後再走路、騎腳踏車再轉公車，或是直接走路去公司，這就類似 Design pattern，不同的設計模式會依據你的情況來做選擇，當然也不是說一定要照著這些模式去做，只是這些設計模式都是軟體的資深人士經過測試與驗證的解決方案，當你學會這些之後，可以在開發架構上有更多的可讀性與重用性。


設計模式通常分為三大類 Creational Design Patterns 、 Structural Design Patterns 、 Behavioral Design Patterns ，這篇會先從 **Creational Design Patterns** 開始說起。

## Creational Design Patterns

顧名思義這個模式主要是創建對象，用控制創建物件的方式來解決問題，我們會討論以下這幾個模式 - **Factory Pattern(工廠模式)、Prototype Pattern(原型模式)、Singleton Pattern(單例模式)**


### Factory Pattern -
Factory Pattern 是其中一種創建物件的模式，他與其他的 Pattern 有個很不一樣的地方是，沒有明確說要建構式，你可以很簡單的用 JavaScript 物件就可以來實作。這種 Pattern 很常用於管理許多不同的物件，但他們卻有許多相似的特點。來看一下以下範例吧！

首先我們想要有兩個不同的按鈕，一個是方形的另一個則是圓形的，接著我們創建一個工廠的物件，由他來負責要生產什麼樣的東西出來，我們可以依據傳入的 buttonType 來拿到我們要物件，並且可以用 instanceof 來知道他是從哪一個原型鏈上建構出來的。
```javascript
    function squareButton() {
        this._shape = 'square'
        this.show = function() {
            return 'Button is showing'
        }
    }
    function circleButton() {
        this._shape = 'circle'
        this.click = function() {
            return 'You clicked circleButton'
        }
    }

    function ButtonFactory() {}

    ButtonFactory.prototype.buttonClass = squareButton
    ButtonFactory.prototype.createButton = function (buttonType) {
        switch (buttonType) {
            case 'square':
                this.buttonClass = squareButton
                break;
            case 'circle':
                this.buttonClass = circleButton
                break;
        }
        this.buttonClass.prototype.el = 'button'
        return new this.buttonClass()
    }
    const buttonFactory = new ButtonFactory()
    const submitWarnBtn = buttonFactory.createButton('square')
    const exitWarnBtn = buttonFactory.createButton('circle')

    console.log(submitWarnBtn instanceof squareButton) //true
```

### Prototype Pattern -
Prototype Pattern 是基於原型繼承(prototypal inheritance)的一種模式，這種模式對於JavaScript來說尤其的重要，因為 JavaScript 屬於 prototypal inheritance，本身提供了很好的優勢，就不需要像其他語言需要用其他方式來模擬。<br>

```javascript
    const robot = {
        power: 8,
        fight() {
            return 'Come on fighting'
        },
        run() {
            return `${this.name} is running}`
        }
    }
    const Mike = Object.create(robot, {
        name: { value: 'Mike' }
    })
```
這邊用到JavaScript ECMAScript 5 新增的 `Object.create` 來實作，還不太懂 prototypal 的，可以看我的上一篇[**JavaScript -- "prototypal"**](/maxfun.io/javaScript-prototypal/)。

### Singleton Pattern
Singleton Pattern 只會有一個實例存在，如果當前沒有實例，則 new 出一個新的並回傳回去，如果有的話，則回傳當前實例回去，最好的例子就是 `mongoose` 。
Singleton Pattern 在對於需要中心化控制的時候非常有用，一個很好的例子就是 database，這種模式可以確保整個創建刪除及修改的生命週期中，不會有任何資料的遺失。

這個範例中我們有一個 Singleton class，首先我們用 new 創建了一個 mongo 建構物件，這時候我們已經有一個實例了，當我們再創建一個 mysql 出來的時候只會去 reference 已經存在的實例，之後回傳回去。

```javascript
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo

```

**資料來源:**<br>
<small>
[- JavaScript Design Patterns.](https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15)
</small>
<br>
<small>
[- Learning JavaScript Design Patterns.](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
</small>
