import { expect, Page } from "@playwright/test";
import { PracticeFormElements } from "./pratice-form.elements";

export class PracticeFormMethods {

    private page: Page
    private practiceFormElements: PracticeFormElements

    constructor(page: Page) {
        this.page = page
        this.practiceFormElements = new PracticeFormElements(page)
    }

    async navigateToToolsQaPage() {
        await this.page.goto('https://demoqa.com/automation-practice-form/', { waitUntil: 'load' })
        await this.page.waitForTimeout(3000)
    }

    async insertFirstName(firstName: string) {
        await this.practiceFormElements.elements.textboxes.firstName.fill(firstName)
    }

    async insertLastName(lastName: string) {
        await this.practiceFormElements.elements.textboxes.lastName.fill(lastName)
    }

    async insertEmail(email: string) {
        await this.practiceFormElements.elements.textboxes.email.fill(email)
    }

    async insertCurrentAddress(currentAddress: string) {
        await this.practiceFormElements.elements.textboxes.currentAddress.fill(currentAddress)
    }

    async insertMobileNumber(mobile: string) {
        await this.practiceFormElements.elements.textboxes.mobile.fill(mobile)
    }

    async insertSubjects(subjects: string) {
        await this.practiceFormElements.elements.textboxes.subjects.fill(subjects)
    }

    async selectMaleAsGender() {
        await this.practiceFormElements.elements.radioButtons.male.waitFor()
        await this.practiceFormElements.elements.radioButtons.male.check({ force: true })
    }

    async selectFemaleAsGender() {
        await this.practiceFormElements.elements.radioButtons.female.check({ force: true })
    }

    async selectOtherAsGender() {
        await this.practiceFormElements.elements.radioButtons.other.check({ force: true })
    }

    async selectDateOfBirth(date: string) {
        await this.practiceFormElements.elements.otherElements.dateOfBirth.fill(date)
        await this.practiceFormElements.elements.otherElements.dateOfBirth.press('Enter')
    }

    async SelectSportsAsHobby() {
        await this.page.waitForSelector('input[type="checkbox"][id="hobbies-checkbox-1"]');
        await this.practiceFormElements.elements.checkboxes.sports.check({ force: true })
    }

    async SelectReadingAsHobby() {
        await this.page.waitForSelector('input[type="checkbox"][id="hobbies-checkbox-1"]');
        await this.practiceFormElements.elements.checkboxes.reading.check({ force: true })
    }

    async SelectMusicAsHobby() {
        await this.page.waitForSelector('input[type="checkbox"][id="hobbies-checkbox-1"]');
        await this.practiceFormElements.elements.checkboxes.music.waitFor()
        await this.practiceFormElements.elements.checkboxes.music.check({ force: true })
    }

    async selectState(state: string) {
        await this.practiceFormElements.elements.selects.state.click({ force: true })
        const option = await this.practiceFormElements.selectableOption(state)
        await option.click()
    }

    async selectCity(city: string) {
        await this.practiceFormElements.elements.selects.city.click({ force: true })
        const option = await this.practiceFormElements.selectableOption(city)
        await option.click()
    }

    async verifyRecordSuccessfullyCreated(){
        const expectedMessage = 'Thanks for submitting the form'
        expect(await this.practiceFormElements.elements.otherElements.modalTitle.textContent()).toEqual(expectedMessage)
    }

    async verifyMobileNumberFieldIsHighlightedInRed(){
        await expect(this.practiceFormElements.elements.textboxes.mobile).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async verifyEmailAddressFieldIsHighlightedInRed(){
        await expect(this.practiceFormElements.elements.textboxes.email).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async clickOnSubmitButton() {
        await this.practiceFormElements.elements.buttons.submit.click()
    }


}