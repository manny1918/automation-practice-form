import { test } from '@playwright/test'
import { PracticeFormMethods } from '../pages/practice-form.methods'
import { PracticeFormData } from '../pages/practice-form.data'
import { GeneralFunctions } from '../support/general-functions'

const testData = PracticeFormData.testData

test.describe('Form submission', () => {
    test('Submit form successfully', async ({ page }) => {
        const practiceFormPageMethods = new PracticeFormMethods(page)

        await practiceFormPageMethods.navigateToToolsQaPage()
        await practiceFormPageMethods.insertFirstName(testData.firstName)
        await practiceFormPageMethods.insertLastName(testData.lastName)
        await practiceFormPageMethods.insertEmail(testData.validEmail)
        await practiceFormPageMethods.selectMaleAsGender()
        await practiceFormPageMethods.insertMobileNumber(testData.validMobileNumber)
        await practiceFormPageMethods.selectDateOfBirth(testData.validDateOfBirth)
        await practiceFormPageMethods.insertSubjects(GeneralFunctions.randomString(30))
        await practiceFormPageMethods.SelectMusicAsHobby()
        await practiceFormPageMethods.insertCurrentAddress(GeneralFunctions.randomString())
        await practiceFormPageMethods.selectState('NCR')
        await practiceFormPageMethods.selectCity('Delhi')
        await practiceFormPageMethods.clickOnSubmitButton()
        await practiceFormPageMethods.verifyRecordSuccessfullyCreated()
    })

    test('Invalid mobile number', async ({ page }) => {
        const practiceFormPageMethods = new PracticeFormMethods(page)

        await practiceFormPageMethods.navigateToToolsQaPage()
        await practiceFormPageMethods.insertMobileNumber(testData.invalidMobileNumber)
        await practiceFormPageMethods.clickOnSubmitButton()
        await practiceFormPageMethods.verifyMobileNumberFieldIsHighlightedInRed()
    })

    test('Invalid email address', async ({ page }) => {
        const practiceFormPageMethods = new PracticeFormMethods(page)

        await practiceFormPageMethods.navigateToToolsQaPage()
        await practiceFormPageMethods.insertEmail(testData.invalidEmail)
        await practiceFormPageMethods.clickOnSubmitButton()
        await practiceFormPageMethods.verifyEmailAddressFieldIsHighlightedInRed()
    })
})