// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1I = 0;
    let str2I = 0;
    if (!str1) return true;
    while (str2I < str2.length) {
      if (str2[str2I] === str1[str1I]) {
        str1I += 1;
      }
      if (str1I === str1.length) return true;
      str2I += 1;
    }
    return false;
  }
  