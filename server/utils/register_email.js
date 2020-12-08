const puppeteer = require('puppeteer');

function Gmail(user, pass, dateOfBirth, monthOfBirth, yearOfBirth){
    
}

function emailFactory() {
    this.create = (user, host, pass, dateOfBirth, monthOfBirth, yearOfBirth) => {
        switch (host) {
            case 1:
                return new Gmail(user, pass, dateOfBirth, monthOfBirth, yearOfBirth)
                break;
        }
    }
}