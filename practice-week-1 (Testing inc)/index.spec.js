
describe('Practice Week 1 - JS basic', function () {
    it('add function should return the total of x + y', function () {
        let test1 = add(5, 4);
        expect(test1).toEqual(9);
    });

    it('minus function', function () {
        expect(minus(1, 2)).toEqual(-1);
    });

    it('test exam result function', function () {
        expect(checkExamResult(90)).toEqual('Pass');
    });

    it('test sum function', function () {
        expect(sum([1, 3, 5])).toEqual(9);
    });

    it('test average function', function () {
        expect(getArrayAverage([3, 3, 3])).toEqual(3);
    });

    it('test uniqueItems function', function () {
        expect(uniqueItems([3, 3, 3])).toEqual([3]);
    });

    it('test reverse function', function () {
        expect(reverse([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([false, 5, 'Lion', 'Lion', 1, 3, 1]);
    });

    it('test reverseSentence function', function () {
        expect(reverseSentence('Lion is the cage!')).toEqual('!egac eht si noiL');
    });

    it('test uniqueInOrder function', function () {
        expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    it('test addFromOneUntil function', function () {
        expect(addFromOneUntil(10)).toEqual(55);
    });

    it('test addFromOneUntil function - number less than 1', function () {
        expect(addFromOneUntil(-4)).toEqual(-4);
    });

    it('test addFromOneUntil function - not a number', function () {
        expect(addFromOneUntil('one')).toEqual(false);
    });

    it('test countCharacters function', function () {
        expect(countCharacters('a', 'Today is a beautiful day!')).toEqual(4);
    });

    it('test countCharacters function - more than 1 character', function () {
        expect(countCharacters('ab', 'Today is a beautiful day!')).toEqual(false);
    });

    it('test removeNumber function', function () {
        expect(removeNumber(5, [3, 5, 7, 9, 5, 10])).toEqual([3, 7, 9, 10]);
    });

    it('test largestNumber function', function () {
        expect(getLargestNumber([5, 12, 8, 15, 3])).toEqual(15);
    });

    it('test secondLargestNumber function', function () {
        expect(getSecondLargestNumber([5, 12, 8, 15, 3])).toEqual(12);
    });

    it('test secondLargestNumber function - number length less than 2', function () {
        expect(getSecondLargestNumber([5])).toEqual(false);
    });
});
