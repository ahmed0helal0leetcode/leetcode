class Solution
{

    /**
     * @param String $ransomNote
     * @param String $magazine
     * @return Boolean
     */
    function canConstruct($ransomNote, $magazine)
    {
        $dictionary = str_split($magazine);
        $letters = str_split($ransomNote);
        foreach ($letters as $letter) {
            $index = array_search($letter, $dictionary);
            if ($index === false) {
                return false;
            } else {
                unset($dictionary[$index]);
            }
        }

        return true;
    }
}