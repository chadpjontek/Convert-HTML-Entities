function convertHTML(str) {
  // Regular expression looking to replace
  var re = /\W/g;
  // Function to find corresponding HTML entities
  function replacer(val) {
    switch (val) {
      case '&':
        return "&amp;";
      case '<':
        return "&lt;";
      case '>':
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      default:
        return val;
    }
  }
  // Replace regex with corresponding HTML entities
  var newStr = str.replace(re, replacer);
  return newStr;
}

// Examples
convertHTML("Dolce & Gabbana"); // returns Dolce &​amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos"); // returns Hamburgers &​lt; Pizza &​lt; Tacos
convertHTML("Sixty > twelve"); // returns Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"'); // returns Stuff in &​quot;quotation marks&​quot;
convertHTML("Shindler's List"); // returns Shindler&​apos;s List
convertHTML("<>"); // returns &​lt;&​gt;
convertHTML("abc"); // returns abc