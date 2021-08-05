import {alphabetSoup} from "./index"

test('dcba should be abcd', ()=>{
    expect(alphabetSoup("dcba")).toBe("abcd");
});
test('hello should be elloh ', ()=>{
    expect(alphabetSoup("hello")).toBe("ehllo");
});
test('javascript should be aacijprstv', ()=>{
    expect(alphabetSoup("javascript")).toBe("aacijprstv");
});

test('dcba should not be dbca',() =>{
    expect(alphabetSoup('dcba')).not.toBe("dbca")
})