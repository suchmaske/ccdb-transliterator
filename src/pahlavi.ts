// TODO: Change encoding
const unicodeCharacterMap: {[key: string]: string} = {
  '10A6F': '015B', // OLD SOUTH ARABIAN LETTER SAMEKH -> LATIN SMALL LETTER S WITH ACUTE
  '10A70': '0066', // OLD SOUTH ARABIAN LETTER FE -> LATIN SMALL LETTER F
  '10A71': '02BC', // OLD SOUTH ARABIAN LETTER ALEF -> MODIFIER LETTER APOSTROPHE
  '10A72': '02BD', // OLD SOUTH ARABIAN LETTER AYN -> MODIFIER LETTER REVERSED COMMA
  '10A73': '1E0D', // OLD SOUTH ARABIAN LETTER DHADHE -> LATIN SMALL LETTER D WITH DOT BELOW
  '10A74': '0067', // OLD SOUTH ARABIAN LETTER GIMEL -> LATIN SMALL LETTER G
  '10A75': '0064', // OLD SOUTH ARABIAN LETTER DALETH -> LATIN SMALL LETTER D
  '10A76': '0121', // OLD SOUTH ARABIAN LETTER GHAYN -> LATIN SMALL LETTER G WITH DOT ABOVE
  '10A77': '1E6D', // OLD SOUTH ARABIAN LETTER TETH -> LATIN SMALL LETTER T WITH DOT BELOW
  '10A78': '007A', // OLD SOUTH ARABIAN LETTER ZAYN -> LATIN SMALL LETTER Z
  '10A79': '1E0F', // OLD SOUTH ARABIAN LETTER DHALETH -> LATIN SMALL LETTER D WITH LINE BELOW
  '10A7A': '0079', // OLD SOUTH ARABIAN LETTER YODH -> LATIN SMALL LETTER Y
  '10A7B': '1E6F', // OLD SOUTH ARABIAN LETTER THAW -> LATIN SMALL LETTER T WITH LINE BELOW
  '10A7C': '1E93', // OLD SOUTH ARABIAN LETTER THETH -> LATIN SMALL LETTER Z WITH DOT BELOW
  '10A7D': '0031', // OLD SOUTH ARABIAN NUMBER ONE -> DIGIT ONE
  '10A7E': '0035u0030', // OLD SOUTH ARABIAN NUMBER FIFTY -> DIGIT FIVE DIGIT ZERO
  '10A7F': 'Zahlzeichen', // OLD SOUTH ARABIAN NUMERIC INDICATOR -> Zahlzeichen
  '10A60': '0068', // OLD SOUTH ARABIAN LETTER HE -> LATIN SMALL LETTER H
  '10A61': '006C', // OLD SOUTH ARABIAN LETTER LAMEDH -> LATIN SMALL LETTER L
  '10A62': '1E25', // OLD SOUTH ARABIAN LETTER HETH -> LATIN SMALL LETTER H WITH DOT BELOW
  '10A63': '006D', // OLD SOUTH ARABIAN LETTER MEM -> LATIN SMALL LETTER M
  '10A64': '0071', // OLD SOUTH ARABIAN LETTER QOPH -> LATIN SMALL LETTER Q
  '10A65': '0077', // OLD SOUTH ARABIAN LETTER WAW -> LATIN SMALL LETTER W
  '10A66': '0161', // OLD SOUTH ARABIAN LETTER SHIN -> LATIN SMALL LETTER S WITH CARON
  '10A67': '0072', // OLD SOUTH ARABIAN LETTER RESH -> LATIN SMALL LETTER R
  '10A68': '0062', // OLD SOUTH ARABIAN LETTER BETH -> LATIN SMALL LETTER B
  '10A69': '0074', // OLD SOUTH ARABIAN LETTER TAW -> LATIN SMALL LETTER T
  '10A6A': '0073', // OLD SOUTH ARABIAN LETTER SAT -> LATIN SMALL LETTER S
  '10A6B': '006B', // OLD SOUTH ARABIAN LETTER KAPH -> LATIN SMALL LETTER K
  '10A6C': '006E', // OLD SOUTH ARABIAN LETTER NUN -> LATIN SMALL LETTER N
  '10A6D': '1E2B', // OLD SOUTH ARABIAN LETTER KHETH -> LATIN SMALL LETTER H WITH BREVE BELOW
  '10A6E': '1E63' // OLD SOUTH ARABIAN LETTER SADHE -> LATIN SMALL LETTER S WITH DOT BELOW
};

export function transliterate(input: String): String {
  let transliterated: String = input;

  Object.keys(unicodeCharacterMap).forEach(pahlavi => {
    let transliteration = unicodeCharacterMap[pahlavi];
    let regex = new RegExp("\\u{" + pahlavi + "}", 'ug');
    transliterated = transliterated.replace(regex, transliteration);
  });
  return transliterated;
}

export default transliterate;