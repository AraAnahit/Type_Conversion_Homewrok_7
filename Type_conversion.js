"" + 1 + 0 // 10 => "" + String("1") + String("0")
"" - 1 + 0 // -1 => Number("") - 1 + 0
true + false // 1 => Number(true) + Number(false)  
6 / "3" // 2 => 6 / Number("3")
"2" * "3" // 6 => Number("2") * Number("3")
4 + 5 + "px" // 9px => String(4 + 5) + "px"
"$" + 4 + 5 // $45 => "$" + String(4) + String(5)
"4" - 2 // 2 => Number("4") - 2
"4px" - 2 // NaN => Number("4px") - 2 
7 / 0 // Infinity
" -9 " + 5 // " -9 5" => " -9 " + String(5)
" -9 " - 5 // -14 => Number(" -9 ") - 5
null + 1 // 1 => Number(null) + 1
undefined + 1 // NaN => undefined haven't type
console.log (undefined +1)