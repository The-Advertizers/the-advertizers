<?php

$req = json_decode(file_get_contents('php://input'), true);

if(!isset($req['data'])){
    header('status: 400', true, 400);
    die();
}

function jsonToTable ($data)
{
    $table = '
    <table style="border: 1px solid black; border-collapse: collapse;">
    ';
    foreach ($data as $key => $value) {
        $table .= '
        <tr style="border: 1px solid black;">
        ';
        if ( ! is_numeric($key)) {
            $table .= '
            <th style="border: 1px solid black; padding: 8px 32px;"> 
                '. $key .'
            </th>
            <td style="border: 1px solid black; padding: 8px 32px;">
            ';
        } else {
            $table .= '
            <td colspan="2">
            ';
        }
        if (is_object($value) || is_array($value)) {
            $table .= jsonToTable($value);
        } else {
            $table .= $value;
        }
        $table .= '
            </td>
        </tr>
        ';
    }
    $table .= '
    </table>
    ';
    return $table;
}

$message = "
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title></title>
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">
    <link href=\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\" rel=\"stylesheet\">
</head>
<body>
    " . jsonToTable($req['data']) . "
</body>
</html>";

$header = "From: website@theadvertizers.com\r\n";
$header .= "X-Mailer: php\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: text/html; charset=UTF-8\r\n";
$header .= "Bcc: sayyam@theadvertizers.com,\r\n";

if (mail("info@theadvertizers.com", "Quotation Form Entry", $message, $header)) {
    header('status: 200' , true, 200);
} else {
    header('status: 500', true, 500);
}
?>
