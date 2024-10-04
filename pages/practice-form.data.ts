export class PracticeFormData{
    static get testData(){
        return{
            firstName: 'Pritam',
            lastName: 'Pater',
            invalidMobileNumber: '123',
            validMobileNumber: '9876543210',
            validDateOfBirth: '02/01/2001',
            validState: 'NFR',
            validCity: 'Delhi',
            validEmail: 'test@upwork.com',
            invalidEmail: 'test@upwork',
        }
    }
}