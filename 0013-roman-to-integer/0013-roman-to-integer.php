class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $lookup= [
            "I"=>1,
           "V"=>5,
            "X"=>10,
            "L"=>50,
            "C"=>100,
            "D"=>500,
            "M"=>1000,
        ];
        $lookupTwo=[
            "CM"=>900,
            "XC"=>90,
            "IV"=>4,
            "IX"=>9,
            "XL"=>40,
            "CD"=>400,
        ];
        
        $sum=0;

        for($i=0;$i<=strlen($s);$i++){
            if($lookupTwo[$s[$i].$s[$i+1]]){
                $sum+=$lookupTwo[$s[$i].$s[$i+1]];
                $i=$i+1;
            }else{
                 $sum+=$lookup[$s[$i]];
            }
        }
        
        return $sum;
        
    }
}