<?php
namespace App\Helpers;

class Mask {

    /**
     * Create a new default function.
     *
     * @return void
     */
    public static function default($val, $mask)
    {
        if(empty($val)):
            return '';
        endif;

        $maskared = '';
        $k = 0;
        for ($i = 0; $i <= strlen($mask) - 1; ++$i) {
            if ($mask[$i] == '#') {
                if (isset($val[$k])) {
                    $maskared .= $val[$k++];
                }
            } else {
                if (isset($mask[$i])) {
                    $maskared .= $mask[$i];
                }
            }
        }
        return $maskared;
    }

    /**
     * Create a new default function.
     *
     * @return void
    */
    public static function AvatarShortName($name = "usuário")
    {
        if ($name <> '') {
            $comAcentos = array('à', 'á', 'â', 'ã', 'ä', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ü', 'ú', 'ÿ', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'O', 'Ù', 'Ü', 'Ú');
            $semAcentos = array('a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'y', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'N', 'O', 'O', 'O', 'O', 'O', '0', 'U', 'U', 'U');
            $name = strtoupper(str_replace($comAcentos, $semAcentos, $name)); // maiusculo e sem acentos

            //region first/last
            $parts = explode(" ", $name);

            if (count($parts) >= 2) {
                $lastname = array_pop($parts);
                while (count($parts) > 1) {
                    array_pop($parts);
                }
                $firstname = implode(" ", $parts);
            } else {
                $firstname = $parts[0];
                $lastname = $parts[0];
            }
            //endregion - end - first/last

            $array = array(
                'firstname' => $firstname,
                'lastname' => $lastname,
            );

            if ($array['firstname'] <> $array['lastname']) {
                return substr($array['firstname'], 0, 1) . substr($array['lastname'], 0, 1);
            } else if (strlen($name) >= 2) {
                return substr($array['firstname'], 0, 2);
            } else {
                return substr($array['firstname'], 0, 1) . substr($array['firstname'], 0, 1);
            }
        } else {
            return "..";
        }
    }

    public static function birth($data)
    {
        if($data):
            list($year, $month, $day) = explode('-', $data);
            $today = new \DateTime();
            $birth = new \DateTime("$year-$month-$day");
            $diff = $today->diff($birth);
            return sprintf('%d anos, %d M e %d D', $diff->y, $diff->m, $diff->d);
        endif;
    }

    public static function time_format_minutes_horas($date)
    {
        // Convert date to timestamp
        $updated_at_timestamp = strtotime($date);

        $time_difference = time() - $updated_at_timestamp;
        $hours = floor($time_difference / 3600);

        // Format time
        if ($hours < 1):
            return gmdate("i:s", $time_difference). " Minutos";
        elseif($hours < 24):
            return gmdate("H:i", $time_difference). " horas";
        else:
            $days = floor($hours / 24);
            $remaining_hours = $hours % 24;
            $time_string = "";
            
            if ($days == 1):
                $time_string .= "1 Dia ";
            elseif ($days > 1):
                $time_string .= $days . " Dias ";
            endif;

            if($remaining_hours == 1):
                $time_string .= "1 Hora";
            elseif ($remaining_hours > 1):
                $time_string .= $remaining_hours . " Horas";
            endif;

            return $time_string;
        endif;
    }

    public static function interval_date($a)
    {
        if($a == '4'):
            return '<td class="table-unit" border="1">10h</td> <td class="table-unit" border="1">14h</td> <td class="table-unit" border="1">18h</td> <td class="table-unit" border="1">22h</td> <td class="table-unit" border="1">02h</td> <td class="table-unit" border="1">06h</td>';
        elseif($a == '6'):
            return '<td class="table-unit" border="1">12h</td> <td class="table-unit" border="1">18h</td> <td class="table-unit" border="1">24h</td> <td class="table-unit" border="1">06h</td>';
        elseif($a == '8'):
            return '<td class="table-unit" border="1">10h</td> <td class="table-unit" border="1">22h</td> <td class="table-unit" border="1">06h</td>';
        elseif($a == '12'):
            return '<td class="table-unit" border="1">10h</td> <td class="table-unit" border="1">22h</td>';
        elseif($a == '24'):
            return '<td class="table-unit" border="1">10h ou 22h</td>';
        endif;
    }
}
