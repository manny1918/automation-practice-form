import { Page } from "@playwright/test";

export class PracticeFormElements{

    private page: Page

    constructor(page: Page){
        this.page = page
    }

    get elements(){
        return{
            textboxes:{
                firstName: this.page.locator('#firstName'),
                lastName: this.page.locator('#lastName'),
                email: this.page.locator('#userEmail'),
                mobile: this.page.locator('#userNumber'),
                subjects: this.page.locator('#subjectsInput'),
                currentAddress: this.page.locator('#currentAddress')
            },
            radioButtons:{
                male: this.page.locator('//div[.="Male"]//input'),
                female: this.page.locator('//div[.="Female"]//input'),
                other: this.page.locator('//div[.="Other"]//input')
            },
            checkboxes: {
                sports: this.page.locator('//div[.="Sports"]//input'),
                reading: this.page.locator('//div[.="Reading"]//input'),
                music: this.page.locator('//div[.="Music"]//input'),
            },
            selects:{
                state: this.page.locator('//div[.="Select State"]//input'),
                city: this.page.locator('//div[.="Select City"]//input')
            },
            buttons:{
                submit: this.page.locator('#submit')
            },
            otherElements: {
                dateOfBirth: this.page.locator('#dateOfBirthInput'),
                modalTitle: this.page.locator('.modal-title')
            }
        }
    }

    async selectableOption(option: string){
        return this.page.locator(`//div[contains(@id, "react-select") and text()="${option}"]`)
    }
}