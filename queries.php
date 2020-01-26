<?php
require 'db.php';
$cmd = $_POST["command"];
switch($cmd)
{
  case "insert_student":
  parse_str($_POST["student_data"], $data);
  try{
    $sql = $db->prepare("insert into registration_students values(:first_name, :last_name, :address, :city, :state, :zip, :teach_name :email, :grade, attended_last, :troop_number, :tshirt_size, :date_registered :school, :teacher, :choice1, :choice2)");
    $sql->execute(array(':first_name'=>$data["first-name"], ':last_name'=>$data["last-name"], ':address'=>$data["home-address-line1"], ':city'=>$data["city-input"], ':state'=>$data["state-select"], ':zip'=>$data["zip-input"],
                        ':teach_name'=>$data["teacher_name"], ':email'=>["email-input"], ':grade'=>$data["grade-select"], ':tshirt-size'=>$data["tshirt-select"], ':troop_number'=>$data["troop-number-input"], ':school'=>$data["school"]));
    echo json_encode($data);
  } catch (PDOException $e) {
    die('An error has occurred! Please try again later.<br />' . $e->getMessage());
  }
  break;

  case "insert_presenter":
  parse_str($_POST["student_data"], $data);
  try{
    $sql = $db->prepare("insert into registration_presenters values(:first_name, :last_name, :position, :employer, :address, :city, :state, :zip, :office_phone :extension, :cell_phone, :email, :tshirt_size, :time_slot :primary, :workshop_id)");
    $sql->execute(array(':first_name'=>$data["first-name"], ':last_name'=>$data["last-name"], ':position'=>$data["position"], ':employer'=>$data["employer"], ':address'=>$data["home-address-line1"], ':city'=>$data["city-input"],
                        ':state'=>$data["state-select"], ':zip'=>$data["zip-input"], ':office_phone'=>$data["office_phone"], ':extension'=>$data["extension"], ':cell_phone'=>$data["cell_phone"], ':email'=>["email-input"],
                        ':tshirt-size'=>$data["tshirt-select"], ':time_slot'=>$data["time_slot"], ':primary'=>$data["primary"], ':workshop_id'=>$data["workshop_id"]));
    echo json_encode($data);
  } catch (PDOException $e) {
    die('An error has occurred! Please try again later.<br />' . $e->getMessage());
  }
  break;

  case "insert_group_leader":
  parse_str($_POST["student_data"], $data);
  try{
    $sql = $db->prepare("insert into registration_groupleader values(:last_name, :first_name, :address, :city, :state, :zip, :school, :email, :tshirt_size, :time_slot)");
    $sql->execute(array(':last_name'=>$data["last-name"], ':first_name'=>$data["first-name"], ':address'=>$data["home-address-line1"], ':city'=>$data["city-input"], ':state'=>$data["state-select"], ':zip'=>$data["zip-input"],
                        ':school'=>$data["school"], ':email'=>$data["email"], ':tshirt_size'=>$data["tshirt_size"], ':time_slot'=>$data["time_slot"]));
    echo json_encode($data);
  } catch (PDOException $e) {
    die('An error has occurred! Please try again later.<br />' . $e->getMessage());
  }
  break;

  case "insert_parent_teacher":
  parse_str($_POST["student_data"], $data);
  try{
    $sql = $db->prepare("insert into registration_volunteer values(:first_name, :last_name, :address, :city, :state, :zip, :teach_name :email, :grade, attended_last, :troop_number, :tshirt_size, :date_registered :school, :teacher, :choice1, :choice2)");
    $sql->execute(array(':first_name'=>$data["first-name"], ':last_name'=>$data["last-name"], ':address'=>$data["home-address-line1"], ':city'=>$data["city-input"], ':state'=>$data["state-select"], ':zip'=>$data["zip-input"],
                        ':teach_name'=>$data["teacher_name"], ':email'=>["email-input"], ':grade'=>$data["grade-select"], ':tshirt-size'=>$data["tshirt-select"], ':troop_number'=>$data["troop-number-input"], ':school'=>$data["school"]));
    echo json_encode($data);
  } catch (PDOException $e) {
    die('An error has occurred! Please try again later.<br />' . $e->getMessage());
  }
  break;

  case "insert_school":
  parse_str($_POST["student_data"], $data);
  try{
    $sql = $db->prepare("insert into registration_schools values(:last_name, :first_name, :address, :city, :state, :zip, :school :email, :tshirt_size, :relationship");
    $sql->execute(array(':last_name'=>$data["last-name"], ':first_name'=>$data["first-name"], ':address'=>$data["home-address-line1"], ':city'=>$data["city-input"], ':state'=>$data["state-select"], ':zip'=>$data["zip-input"],
                        ':school'=>$data["school"], ':email'=>["email-input"], ':tshirt-size'=>$data["tshirt-select"], ':relationship'=>$data["relationship"]));
    echo json_encode($data);
  } catch (PDOException $e) {
    die('An error has occurred! Please try again later.<br />' . $e->getMessage());
  }
  break;

}

 ?>
