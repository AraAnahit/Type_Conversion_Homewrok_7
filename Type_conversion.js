1. "" + 1 + 0 // result: 10 ->  "" + String("1") + String("0")
2. "" - 1 + 0 // result: -1 -> Number("") - 1 + 0
3. true + false // result: 1 -> Number(true) + Number(false)  
4. 6 / "3" // result: 2 -> 6 / Number("3")
5. "2" * "3" // result: 6 -> Number("2") * Number("3")
6. 4 + 5 + "px" // result: 9px -> String(4 + 5) + "px"
7. "$" + 4 + 5 // result: $45 -> "$" + String(4) + String(5)
8. "4" - 2 // result: 2 -> Number("4") - 2
9. "4px" - 2 // result: NaN -> Number("4px") - 2 
10. 7 / 0 // result: Infinity
11. " -9 " + 5 // result: " -9 5" -> " -9 " + String(5)
12. " -9 " - 5 // result: -14 -> Number("-9 ") - 5
13. null + 1 // result: 1 -> Number(null) + 1
14. undefined + 1 // result: NaN 