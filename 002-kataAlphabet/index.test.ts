import {alphabetSoup} from "./index"

test('dcba should be abcd', ()=>{
    expect(alphabetSoup("dcba")).toBe("abcd");
});

test('dcba should not be dbca',() =>{
    expect(alphabetSoup('dcba')).not.toBe("dbca")
})