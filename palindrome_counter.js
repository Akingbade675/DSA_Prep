function countPalindromes(s) {
    let palindromes = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1)
            let reversedSubstring = [...substring].reverse().join('')

            if (substring === reversedSubstring) palindromes++
        }
    }

    console.log(palindromes)
}

countPalindromes('mom')
countPalindromes('tacocat')
countPalindromes('aaa')
countPalindromes('abccba')
countPalindromes('daata')
