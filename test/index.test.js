var addNum = require('../mytest/index')

var assert = require('chai').assert

describe('测试index.js', function(){
    describe('测试addNum函数',function(){
        it('两数相加结果为两数字的和',function(){
            

            if(addNum(1,2) !== 3){
                //expect(addNum(1, 2).to.be.equal(3))
               assert.equal(addnum(1,2),3)
                // throw new error('两数相加结果不为两数字的和');
            }
        })
    })
})