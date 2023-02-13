'use strict'
var should = require('should')
// const sinon = require('sinon')
const {addDescription, type} = require('../index.js')

describe('addDescription.js', function () {
  describe('course', () => {
    it('should add the type:course, userType:teachers', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.teachers'})._desc.should.deepEqual({type: type.course, userType: type.teachers}))
    it('should add the type assistants', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.assistants'})._desc.should.deepEqual({type: type.course, userType: type.assistants}))
    it('should add the type courseresponsibles', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.courseresponsible'})._desc.should.deepEqual({type: type.course, userType: type.courseresponsibles}))
    it('should add the type students', () => addDescription({ug1Name: 'ladok2.kurser.SD.2230.registrerade_20162.1'})._desc.should.deepEqual({type: type.course, userType: type.students}))
    it('should add the type omregistrerad', () => addDescription({ug1Name: 'ladok2.kurser.KD.1070.omregistrerade_20171'})._desc.should.deepEqual({type: type.course, userType: type.omregistrerade}))
    it('should add the antagna', ()=> addDescription({ug1Name: 'ladok2.kurser.MG.212X.antagna_20172.1'})._desc.should.deepEqual({type: type.course, userType: type.antagna}))
    it('should add the staff as students', ()=> addDescription({ug1Name: 'app.katalog3.A'})._desc.should.deepEqual({type: type.staff, userType: type.students}))
  })

  it('should add the type unknown', () => addDescription({})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: ''})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: 'test'})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: 'ladok2.kurser.MJ.220X.antagna_20171'})._desc.should.deepEqual({type: type.unknown}))

  it('should add the type user', () => addDescription({ugClass: 'user'})._desc.should.deepEqual({type: type.user}))
})
