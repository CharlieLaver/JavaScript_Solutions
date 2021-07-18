
<!-- before running add the API username & key to secret.php -->

<!DOCTYPE html>
<html>
    <head>
      <meta charset="UTF-8">
      <title>EPC TASK</title>
      <link rel="stylesheet" href="styles.css">
    </head>

    <body>
    <!-- form data sent as HTTP post transaction -->
    <form method="POST">

<?php
    //includes the username & password for the API from secret.php
    include 'secret.php';

    //start a session
    session_start();

    //shows the postcode input if both inputs are not set 
    if(!isset($_POST['postcode']) && !isset($_POST['addressSelect'])) {
        echo '<h1>Enter UK Postcode</h1>';
        echo '<p>enter postcode all in capitals with a space in the middle</p>';
        echo "<input type='text' placeholder='postcode' name='postcode'/>";
        //bool to detect if on the first page
        $isFirstPage = true;
    }

    //string to store search input
    $search = '';
    //bool to detect if on the error page
    $onErrorPage = false;

    //if the postcode input is set then the search string is set to equal the inputted postcode value
    if(isset($_POST['postcode'])) {
        //concatenates a search string for the URL
        $search = "search?postcode=" . urlencode($_POST['postcode']); 
        //saves the inputted postcode in a session variable 
        $_SESSION['currentPostcode'] = $_POST['postcode'];

        $isFirstPage = false;
    }

    //if the addressSelect input is set then the search string is set to equal the selected address 
    if(isset($_POST['addressSelect'])) {
        $search = "search?address=" . urlencode($_POST['addressSelect']); 
    }
    
    //if the submit button is set
    if(isset($_POST['submit'])) {

        //regex validation for UK postcode
        if(preg_match("/^(GIR 0AA)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2})$/", $_SESSION['currentPostcode'])) {

            //the search on the API’s URL is changed to be whatever the $search string is
            $url = "https://epc.opendatacommunities.org/api/v1/domestic/$search";
            
            //initialize a cURL session 
            $ch = curl_init($url); 
            //set curl options
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            //setting Authorization header
            curl_setopt($ch, CURLOPT_USERPWD, $user.":".$pwd);
            //set option for what data format is accepted
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Accept: application/json'
            ));
            //get the json
            $data = curl_exec($ch);
            //release the curl handle 
            curl_close($ch);

            //json string being decoded
            $arrayData = json_decode($data);
            //accessing the rows array of the json
            $arrayDataRows = $arrayData->rows; 

            //if the postcode input is set
            if(isset($_POST['postcode'])) {
                echo '<h1>Select Address</h1>';
                //open html select tags
                echo '<select name="addressSelect">';

                //iterate over the rows array and add a new option tag for each address with the address as it value 
                $index = 0;
                foreach($arrayDataRows as $value) {
                    echo '<option value="' . $arrayDataRows[$index]->address . '">' . $arrayDataRows[$index]->address . '</option>';
                    $index++;
                }
                //close html select tags 
                echo '</select>';
            }

            //if the addressSelect input is set
            if(isset($_POST['addressSelect'])) {
                    //function that finds the correct address
                    function getCorrectIndex($data) {
                        $index = 0;
                        foreach($data as $value) {
                            //returns the index of the address that matches the inputted postcode
                            if(($data[$index]->postcode) === $_SESSION['currentPostcode']) {
                                return $index;
                                break;
                            }
                            $index++;
                    }
                }
                    //the returned index is assigned to $addressIndex variable 
                    $addressIndex = getCorrectIndex($arrayDataRows);
                    
                    //function that takes in the current & potential of a statistic
                    function analysis($current, $potential) {
                        //returns the percentage decrease of the two numbers rounded to the nearest integer  
                        return round(($potential - $current) / $current * 100);
                    }

                    //the selected address is displayed
                    echo '<h1>' . $arrayDataRows[$addressIndex]->address . '</h1>'; 
                    //the current energy rating for this address
                    echo '<h1>Energy Rating ' . $arrayDataRows[$addressIndex]->{'current-energy-rating'} . '</h1>';
                    //open html table tags 
                    echo '<table>';
                    //table headers of the statistics 
                    echo '<tr>';
                    echo '<th></th>';
                    echo '<th>energy consumption</th>';
                    echo '<th>co2 emissions</th>';
                    echo '<th>environment impact</th>';
                    echo '<th>heating cost</th>';
                    echo '</tr>';
                    //the current for each statistic is displayed 
                    echo '<tr>';
                    echo '<td>current</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'energy-consumption-current'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'co2-emissions-current'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'environment-impact-current'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'heating-cost-current'} . '</td>';
                    echo '</tr>';
                    //the potential for each statistic is displayed 
                    echo '<tr>';
                    echo '<td>potential</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'energy-consumption-potential'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'co2-emissions-potential'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'environment-impact-potential'} . '</td>';
                    echo '<td>' . $arrayDataRows[$addressIndex]->{'heating-cost-potential'} . '</td>';
                    echo '</tr>';
                    //the percentage decrease for each statistic is displayed 
                    echo '<tr>';
                    echo '<td>percentage until potential is reached</td>';
                    //both the current & potential numbers from the json are passed into the analysis function 
                    echo '<td>' . analysis($arrayDataRows[$addressIndex]->{'energy-consumption-current'}, $arrayDataRows[$addressIndex]->{'energy-consumption-potential'}) . '%</td>';
                    echo '<td>' . analysis($arrayDataRows[$addressIndex]->{'co2-emissions-current'}, $arrayDataRows[$addressIndex]->{'co2-emissions-potential'}) . '%</td>';
                    echo '<td>' . analysis($arrayDataRows[$addressIndex]->{'environment-impact-current'}, $arrayDataRows[$addressIndex]->{'environment-impact-potential'}) . '%</td>';
                    echo '<td>' . analysis($arrayDataRows[$addressIndex]->{'heating-cost-current'}, $arrayDataRows[$addressIndex]->{'heating-cost-potential'}) . '%</td>';
                    echo '</tr>';
            }
                
        } else {
            //if not on the first page and validation has failed
            if(!$isFirstPage) {
                //user must be on the error page
                $onErrorPage = true;
                echo '<h1>POSTCODE NOT VALID</h1>';
                echo '<button>go back</button>';
            }
        }
    } 

//if the user is not on the error page display one of these buttons
if(!$onErrorPage) {
    //is the addressSelect input is set then show the back button else show the submit button
if(isset($_POST['addressSelect'])) {
    echo '<button>Search Another Address</button>';
} else {
    echo '<input type="submit" name="submit">';
}
}


?>

  </form>

 </body>

</html>


