import '../utils/zoho.utility';

export const musculoskeletal : Function = (ms : Object) : Object => {
  /*

  Start of variable declaration

  */
  let msPrimaryClaimsList: String[] = [];
  let msPrimaryFormattedList = "";
  let msSecondaryFunctionList: String[] = [];
  let msNotConnectedFormattedList = "";
  let msDirectRelatedList: String[] = [];
  let msDirectRelatedFormattedList = "";
  /*

  End of variable declaration

  */

  /*

  Start of JSON Data

  */
  const muscu_LE_Map = {"Hip joint problem- Right":"Hip_Prob_Right","Hip joint problem- Left":"Hip_Prob_Left","Knee Problem- Right":"Knee_Prob_Right","Knee Problem- Left":"Knee_Prob_Left","Ankle Problem- Right":"Ankle_Prob_Right","Ankle Problem- Left":"Ankle_Prob_Left","Foot Problem- Right":"Foot_Prob_Right","Foot Problem- Left":"Foot_Prob_Left","Flat Feet (Pes Planus)":"Pes_Planus","Plantar Fasciitis- Right":"Plantar_Fasciitis_Right","Chronic Muscle Strain in Right Leg":"Chronic_Leg_Right","Chronic Muscle Strain in Left Leg":"Chronic_Leg_Left"};
  const muscu_LE_Arth_Map = {"Hip joint problem- Right":"Hip_Right_Joint","Hip joint problem- Left":"Hip_Left_Joint","Knee Problem- Right":"Knee_Right_Joint","Knee Problem- Left":"Knee_Left_Joint","Ankle Problem- Right":"Ankle_Right_Joint","Ankle Problem- Left":"Ankle_Left_Joint","Foot Problem- Right":"Foot_Right_Joint","Foot Problem- Left":"Foot_Left_Joint","Flat Feet (Pes Planus)":"Pes_Planus_Assist"};
  const muscu_LE_Arth_Text_Map = {"Hip_Right_Joint":"Right Hip Arthritis","Hip_Left_Joint":"Left Hip Arthritis","Knee_Right_Joint":"Right Knee Arthritis","Knee_Left_Joint":"Left Knee Arthritis","Ankle_Right_Joint":"Right Ankle Arthritis","Ankle_Left_Joint":"Left Ankle Arthritis","Foot_Right_Joint":"Right Foot Arthritis","Foot_Left_Joint":"Left Foot Arthritis","Pes_Planus_Assist":"Pes Planus Assist Devices required during service"};
  const muscu_UE_Map = {"Shoulder Problem- Right":"Shoulder_Prob_Right","Shoulder Problem- Left":"Shoulder_Prob_Left","Elbow Problem- Right":"Elbow_Prob_Right","Elbow Problem- Left":"Elbow_Prob_Left","Wrist Problem- Right":"Wrist_Prob_Right","Wrist Problem- Left":"Wrist_Prob_Left","Hand or Finger Problem- Right":"Hand_Prob_Right","Hand or Finger Problem- Left":"Hand_Prob_Left","Chronic Muscle Strain in Right Arm or Shoulder":"Chronic_Arm_Right","Chronic Muscle Strain in Left Arm or Shoulder":"Chronic_Arm_Left"};
  const muscu_UE_Arth_Map = {"Shoulder Problem- Right":"Shoulder_Right_Joint","Shoulder Problem- Left":"Shoulder_Left_Joint","Elbow Problem- Right":"Elbow_Right_Joint","Elbow Problem- Left":"Elbow_Left_Joint","Wrist Problem- Right":"Wrist_Right_Joint","Wrist Problem- Left":"Wrist_Left_Joint","Hand or Finger Problem- Right":"Hand_Finger_Right_Joint","Hand or Finger Problem- Left":"Hand_Finger_Left_Joint"};
  const muscu_UE_Arth_Text_Map = {"Shoulder_Right_Joint":"Right Shoulder Arthritis","Shoulder_Left_Joint":"Left Shoulder Arthritis","Elbow_Right_Joint":"Right Elbow Arthritis","Elbow_Left_Joint":"Left Elbow Arthritis","Wrist_Right_Joint":"Right Wrist Arthritis","Wrist_Left_Joint":"Left Wrist Arthritis","Hand_Finger_Right_Joint":"Right Hand and Finger Arthritis","Hand_Finger_Left_Joint":"Left Hand and Finger Arthritis"};
  const muscu_Other_Map = {"Strain or Chronic Pain of your Neck (Cervical Spine)":"Neck_Pain","Strain or Chronic Pain of your Lower Back (Lumbar Spine)":"Lower_Back_Pain","Strain or Chronic Pain of your Mid Back (Thoracic Spine)":"Mid_Back_Pain","Gout or Rheumatoid Arthritis":"Gout","Psoriatic Arthritis":"Psoriatic_Arth","Jaw pain/Temporomandiubular disorder (TMD)":"Jaw_Pain","Other Musculoskeletal Conditions (Lower and Upper Extremities as well)":"Other_MS_Select"};
  const muscu_Other_Arth_Map = {"Strain or Chronic Pain of your Neck (Cervical Spine)":"Neck_Joint","Strain or Chronic Pain of your Lower Back (Lumbar Spine)":"Lower_Back_Joint","Strain or Chronic Pain of your Mid Back (Thoracic Spine)":"Mid_Back_Joint"};
  const muscu_Other_Arth_Text_Map = {"Neck_Joint":"Neck Arthrits","Lower_Back_Joint":"Lower Back Arthritis","Mid_Back_Joint":"Mid Back Arthritis"};

/*

End of JSON Data

*/

//Start of MusculoSkeletal Check
//Start of Lower Extremity Check
const leChecklist = ms.get("Lower_Extremity_Select");
//// START HIP JOINT PROBLEM
//Check for Right Hip Problem
const rightHipProb = ms.get("Hip_Prob_Right");
//Check for Right Hip Arth
const rightHipArthritis = ms.get("Hip_Right_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Hip joint problem- Right") && rightHipProb.notContains("I do not have this condition"))
{
	if(rightHipProb.contains("I applied for this and I am currently waiting on a VA decision") || rightHipProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightHipProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightHipProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightHipProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightHipArthritis == "Yes")
		{
			//Vet not connected for Right Hip Arthritis
			msSecondaryFunctionList.add("Hip Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Arthritis- Right\n");
			if(rightHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hip Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Arthritis- Right\n");
			}
		}
		else if(rightHipArthritis == "No")
		{
			//Vet not connected for Right Hip Problem
			msSecondaryFunctionList.add("Hip Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Problem- Right\n");
			if(rightHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hip Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightHipArthritis == "Yes")
		{
			//Vet connected for Right Hip Arthritis
			msPrimaryClaimsList.add("Hip Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Arthritis- Right\n");
		}
		else if(rightHipArthritis == "No")
		{
			//Vet connected for Right Hip Problem
			msPrimaryClaimsList.add("Hip Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Problem- Right\n");
		}
	}
}
//Check for Left Hip Problem
const leftHipProb = ms.get("Hip_Prob_Left");
//Check for Left Hip Arth
const leftHipArthritis = ms.get("Hip_Left_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Hip joint problem- Left") && leftHipProb.notContains("I do not have this condition"))
{
	if(leftHipProb.contains("I applied for this and I am currently waiting on a VA decision") || leftHipProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftHipProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftHipProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftHipProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftHipArthritis == "Yes")
		{
			//Vet not connected for Left Hip Arthritis
			msSecondaryFunctionList.add("Hip Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Arthritis- Left\n");
			if(leftHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hip Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Arthritis- Left\n");
			}
		}
		else if(leftHipArthritis == "No")
		{
			//Vet not connected for Left Hip Problem
			msSecondaryFunctionList.add("Hip Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Problem- Left\n");
			if(leftHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hip Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftHipArthritis == "Yes")
		{
			//Vet connected for Left Hip Arthritis
			msPrimaryClaimsList.add("Hip Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Arthritis- Left\n");
		}
		else if(leftHipArthritis == "No")
		{
			//Vet connected for Left Hip Problem
			msPrimaryClaimsList.add("Hip Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Problem- Left\n");
		}
	}
}
//Check for Secondary 'Both Hip Problem'
if(msSecondaryFunctionList.contains("Hip Problem- Right") && msSecondaryFunctionList.contains("Hip Problem- Left"))
{
	//Vet not connected for Both Hip Problem
	msSecondaryFunctionList.removeElement("Hip Problem- Right");
	msSecondaryFunctionList.removeElement("Hip Problem- Left");
	msSecondaryFunctionList.add("Hip Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hip Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hip Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Problem- Both\n");
	if(rightHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftHipProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Hip Problem- Left");
		msDirectRelatedList.removeElement("Hip Problem- Right");
		msDirectRelatedList.add("Hip Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hip Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hip Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Problem- Both\n");
	}
}
//Check for Primary 'Both Hip Problem'
if(msPrimaryClaimsList.contains("Hip Problem- Right") && msPrimaryClaimsList.contains("Hip Problem- Left"))
{
	//Vet connected for Both Hip Problem
	msPrimaryClaimsList.removeElement("Hip Problem- Right");
	msPrimaryClaimsList.removeElement("Hip Problem- Left");
	msPrimaryClaimsList.add("Hip Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hip Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hip Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Problem- Both\n");
}
//// END HIP JOINT PROBLEM
//Check for Secondary 'Both Hip Arthritis'
if(msSecondaryFunctionList.contains("Hip Arthritis- Right") && msSecondaryFunctionList.contains("Hip Arthritis- Left"))
{
	//Vet not connected for Both Hip Arthritis
	msSecondaryFunctionList.removeElement("Hip Arthritis- Right");
	msSecondaryFunctionList.removeElement("Hip Arthritis- Left");
	msSecondaryFunctionList.add("Hip Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hip Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hip Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hip Arthritis- Both\n");
	if(rightHipArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftHipArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Hip Arthritis- Right");
		msDirectRelatedList.removeElement("Hip Arthritis- Left");
		msDirectRelatedList.add("Hip Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hip Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hip Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hip Arthritis- Both\n");
	}
}
//Check for Primary 'Both Hip Arthritis'
if(msPrimaryClaimsList.contains("Hip Arthritis- Right") && msPrimaryClaimsList.contains("Hip Arthritis- Left"))
{
	//Vet connected for Both Hip Arthritis
	msPrimaryClaimsList.removeElement("Hip Arthritis- Right");
	msPrimaryClaimsList.removeElement("Hip Arthritis- Left");
	msPrimaryClaimsList.add("Hip Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hip Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hip Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Hip Arthritis- Both\n");
}
//// END HIP ARTHRITIS
//// START KNEE PROBLEM
//Check for Right Knee Problem
const rightKneeProb = ms.get("Knee_Prob_Right");
//Check for Right Knee Arthritis
const rightKneeArthritis = ms.get("Knee_Right_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Knee Problem- Right") && rightKneeProb.notContains("I do not have this condition"))
{
	if(rightKneeProb.contains("I applied for this and I am currently waiting on a VA decision") || rightKneeProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightKneeProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightKneeProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightKneeProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightKneeArthritis == "Yes")
		{
			//Vet not connected for Right Knee Arthritis
			msSecondaryFunctionList.add("Knee Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Arthritis- Right\n");
			if(rightKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Knee Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Arthritis- Right\n");
			}
		}
		else if(rightKneeArthritis == "No")
		{
			//Vet not connected for Right Knee Problem
			msSecondaryFunctionList.add("Knee Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Problem- Right\n");
			if(rightKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Knee Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightKneeArthritis == "Yes")
		{
			//Vet connected for Right Knee Arthritis
			msPrimaryClaimsList.add("Knee Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Arthritis- Right\n");
		}
		else if(rightKneeArthritis == "No")
		{
			//Vet connected for Right Knee Problem
			msPrimaryClaimsList.add("Knee Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Problem- Right\n");
		}
	}
}
//Check for Left Knee Problem
const leftKneeProb = ms.get("Knee_Prob_Left");
//Check for Left Knee Arthritis
const leftKneeArthritis = ms.get("Knee_Left_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Knee Problem- Left") && leftKneeProb.notContains("I do not have this condition"))
{
	if(leftKneeProb.contains("I applied for this and I am currently waiting on a VA decision") || leftKneeProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftKneeProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftKneeProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftKneeProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftKneeArthritis == "Yes")
		{
			//Vet not connected for Left Knee Arthritis
			msSecondaryFunctionList.add("Knee Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Arthritis- Left\n");
			if(leftKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Knee Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Arthritis- Left\n");
			}
		}
		else if(leftKneeArthritis == "No")
		{
			//Vet not connected for Left Knee Problem
			msSecondaryFunctionList.add("Knee Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Problem- Left\n");
			if(leftKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Knee Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftKneeArthritis == "Yes")
		{
			//Vet connected for Left Knee Arthritis
			msPrimaryClaimsList.add("Knee Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Arthritis- Left\n");
		}
		else if(leftKneeArthritis == "No")
		{
			//Vet connected for Left Knee Problem
			msPrimaryClaimsList.add("Knee Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Problem- Left\n");
		}
	}
}
//Check for Secondary 'Both Knee Problem'
if(msSecondaryFunctionList.contains("Knee Problem- Right") && msSecondaryFunctionList.contains("Knee Problem- Left"))
{
	//Vet not connected for Both Knee Problem
	msSecondaryFunctionList.removeElement("Knee Problem- Right");
	msSecondaryFunctionList.removeElement("Knee Problem- Left");
	msSecondaryFunctionList.add("Knee Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Knee Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Knee Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Problem- Both\n");
	if(rightKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftKneeProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Knee Problem- Right");
		msDirectRelatedList.removeElement("Knee Problem- Left");
		msDirectRelatedList.add("Knee Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Knee Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Knee Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Problem- Both\n");
	}
}
//Check for Primary 'Both Knee Problem'
if(msPrimaryClaimsList.contains("Knee Problem- Right") && msPrimaryClaimsList.contains("Knee Problem- Left"))
{
	//Vet connected for Both Knee Problem
	msPrimaryClaimsList.removeElement("Knee Problem- Right");
	msPrimaryClaimsList.removeElement("Knee Problem- Left");
	msPrimaryClaimsList.add("Knee Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Knee Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Knee Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Problem- Both\n");
}
//// END KNEE PROBLEM
//// START KNEE ARTHRITIS
//Check for Secondary 'Both Knee Arthritis'
if(msSecondaryFunctionList.contains("Knee Arthritis- Right") && msSecondaryFunctionList.contains("Knee Arthritis- Left"))
{
	//Vet not connected for Both Knee Arthritis
	msSecondaryFunctionList.removeElement("Knee Arthritis- Right");
	msSecondaryFunctionList.removeElement("Knee Arthritis- Left");
	msSecondaryFunctionList.add("Knee Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Knee Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Knee Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Knee Arthritis- Both\n");
	if(rightKneeArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftKneeArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Knee Arthritis- Right");
		msDirectRelatedList.removeElement("Knee Arthritis- Left");
		msDirectRelatedList.add("Knee Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Knee Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Knee Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Knee Arthritis- Both\n");
	}
}
//Check for Primary 'Both Knee Arthritis'
if(msPrimaryClaimsList.contains("Knee Arthritis- Right") && msPrimaryClaimsList.contains("Knee Arthritis- Left"))
{
	//Vet connected for Both Knee Arthritis
	msPrimaryClaimsList.removeElement("Knee Arthritis- Right");
	msPrimaryClaimsList.removeElement("Knee Arthritis- Left");
	msPrimaryClaimsList.add("Knee Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Knee Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Knee Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Knee Arthritis- Both\n");
}
//// END KNEE ARTHRITIS
//// START ANKLE PROBLEM
//Check for Right Ankle Problem
const rightAnkleProb = ms.get("Ankle_Prob_Right");
//Check for Right Ankle Arthritis
const rightAnkleArthritis = ms.get("Ankle_Right_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Ankle Problem- Right") && rightAnkleProb.notContains("I do not have this condition"))
{
	if(rightAnkleProb.contains("I applied for this and I am currently waiting on a VA decision") || rightAnkleProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightAnkleProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightAnkleProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightAnkleProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightAnkleArthritis == "Yes")
		{
			//Vet not connected for Right Ankle Arthritis
			msSecondaryFunctionList.add("Ankle Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Arthritis- Right\n");
			if(rightAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Ankle Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Arthritis- Right\n");
			}
		}
		else if(rightAnkleArthritis == "No")
		{
			//Vet not connected for Right Ankle Problem
			msSecondaryFunctionList.add("Ankle Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Problem- Right\n");
			if(rightAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Ankle Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightAnkleArthritis == "Yes")
		{
			//Vet connected for Right Ankle Arthritis
			msPrimaryClaimsList.add("Ankle Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Arthritis- Right\n");
		}
		else if(rightAnkleArthritis == "No")
		{
			//Vet connected for Right Ankle Problem
			msPrimaryClaimsList.add("Ankle Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Problem- Right\n");
		}
	}
}
//Check for Left Ankle Problem
const leftAnkleProb = ms.get("Ankle_Prob_Left");
//Check for Left Ankle Arthritis
const leftAnkleArthritis = ms.get("Ankle_Right_Left");
//Initialize variable for .get function
if(leChecklist.contains("Ankle Problem- Left") && leftAnkleProb.notContains("I do not have this condition"))
{
	if(leftAnkleProb.contains("I applied for this and I am currently waiting on a VA decision") || leftAnkleProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftAnkleProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftAnkleProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftAnkleProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftAnkleArthritis == "Yes")
		{
			//Vet not connected for Left Ankle Arthritis
			msSecondaryFunctionList.add("Ankle Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Arthritis- Left\n");
			if(leftAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Ankle Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Arthritis- Left\n");
			}
		}
		else if(leftAnkleArthritis == "No")
		{
			//Vet not connected for Left Ankle Problem
			msSecondaryFunctionList.add("Ankle Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Problem- Left\n");
			if(leftAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Ankle Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftHipArthritis == "Yes")
		{
			//Vet connected for Left Ankle Arthritis
			msPrimaryClaimsList.add("Ankle Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Arthritis- Left\n");
		}
		else if(leftHipArthritis == "No")
		{
			//Vet connected for Left Ankle Problem
			msPrimaryClaimsList.add("Ankle Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Problem- Left\n");
		}
	}
}
//Check for Secondary 'Both Ankle Problem'
if(msSecondaryFunctionList.contains("Ankle Problem- Right") && msSecondaryFunctionList.contains("Ankle Problem- Left"))
{
	//Vet not connected for Both Ankle Problem
	msSecondaryFunctionList.removeElement("Ankle Problem- Right");
	msSecondaryFunctionList.removeElement("Ankle Problem- Left");
	msSecondaryFunctionList.add("Ankle Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Ankle Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Ankle Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Problem- Both\n");
	if(rightAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftAnkleProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Ankle Problem- Right");
		msDirectRelatedList.removeElement("Ankle Problem- Left");
		msDirectRelatedList.add("Ankle Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Ankle Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Ankle Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Problem- Both\n");
	}
}
//Check for Primary 'Both Ankle Problem'
if(msPrimaryClaimsList.contains("Ankle Problem- Right") && msPrimaryClaimsList.contains("Ankle Problem- Left"))
{
	//Vet connected for Both Ankle Problem
	msPrimaryClaimsList.removeElement("Ankle Problem- Right");
	msPrimaryClaimsList.removeElement("Ankle Problem- Left");
	msPrimaryClaimsList.add("Ankle Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Ankle Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Ankle Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Problem- Both\n");
}
//// END ANKLE PROBLEM
//// START ANKLE ARTHRITIS
//Check for Secondary 'Both Ankle Arthritis'
if(msSecondaryFunctionList.contains("Ankle Arthritis- Right") && msSecondaryFunctionList.contains("Ankle Arthritis- Left"))
{
	//Vet not connected for Both Ankle Arthritis
	msSecondaryFunctionList.removeElement("Ankle Arthritis- Right");
	msSecondaryFunctionList.removeElement("Ankle Arthritis- Left");
	msSecondaryFunctionList.add("Ankle Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Ankle Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Ankle Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Ankle Arthritis- Both\n");
	if(rightAnkleArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftAnkleArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Ankle Arthritis- Right");
		msDirectRelatedList.removeElement("Ankle Arthritis- Left");
		msDirectRelatedList.add("Ankle Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Ankle Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Ankle Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Ankle Arthritis- Both\n");
	}
}
//Check for Primary 'Both Ankle Arthritis'
if(msPrimaryClaimsList.contains("Ankle Arthritis- Right") && msPrimaryClaimsList.contains("Ankle Arthritis- Left"))
{
	//Vet connected for Both Ankle Arthritis
	msPrimaryClaimsList.removeElement("Ankle Arthritis- Right");
	msPrimaryClaimsList.removeElement("Ankle Arthritis- Left");
	msPrimaryClaimsList.add("Ankle Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Ankle Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Ankle Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Ankle Arthritis- Both\n");
}
//// END ANKLE ARTHRITIS
//// START FOOT PROBLEM
//Check for Right Foot Problem
const rightFootProb = ms.get("Foot_Prob_Right");
//Check for Right Foot Arthritis
const rightFootArthritis = ms.get("Foot_Right_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Foot Problem- Right") && rightFootProb.notContains("I do not have this condition"))
{
	if(rightFootProb.contains("I applied for this and I am currently waiting on a VA decision") || rightFootProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightFootProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightFootProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightFootProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightFootArthritis == "Yes")
		{
			//Vet not connected for Right Foot Arthritis
			msSecondaryFunctionList.add("Foot Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Arthritis- Right\n");
			if(rightFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Foot Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Arthritis- Right\n");
			}
		}
		else if(rightFootArthritis == "No")
		{
			//Vet not connected for Right Foot Problem
			msSecondaryFunctionList.add("Foot Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Problem- Right\n");
			if(rightFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Foot Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightFootArthritis == "Yes")
		{
			//Vet connected for Right Foot Arthritis
			msPrimaryClaimsList.add("Foot Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Arthritis- Right\n");
		}
		else if(rightFootArthritis == "No")
		{
			//Vet connected for Right Foot Problem
			msPrimaryClaimsList.add("Foot Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Problem- Right\n");
		}
	}
}
//Check for Left Foot Problem
const leftFootProb = ms.get("Foot_Prob_Left");
//Check for Left Foot Arthritis
const leftFootArthritis = ms.get("Foot_Left_Joint");
//Initialize variable for .get function
if(leChecklist.contains("Foot Problem- Left") && leftFootProb.notContains("I do not have this condition"))
{
	if(leftFootProb.contains("I applied for this and I am currently waiting on a VA decision") || leftFootProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftFootProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftFootProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftFootProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftFootArthritis == "Yes")
		{
			//Vet not connected for Left Foot Arthritis
			msSecondaryFunctionList.add("Foot Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Arthritis- Left\n");
			if(leftFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Foot Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Arthritis- Left\n");
			}
		}
		else if(leftFootArthritis == "No")
		{
			//Vet not connected for Left Foot Problem
			msSecondaryFunctionList.add("Foot Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Problem- Left\n");
			if(leftFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Foot Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftFootArthritis == "Yes")
		{
			//Vet connected for Left Foot Arthritis
			msPrimaryClaimsList.add("Foot Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Arthritis- Left\n");
		}
		else if(leftFootArthritis == "No")
		{
			//Vet connected for Left Foot Problem
			msPrimaryClaimsList.add("Foot Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Problem- Left\n");
		}
	}
}
//Check for Secondary 'Both Foot Problem'
if(msSecondaryFunctionList.contains("Foot Problem- Right") && msSecondaryFunctionList.contains("Foot Problem- Left"))
{
	//Vet not connected for Both Foot Problem
	msSecondaryFunctionList.removeElement("Foot Problem- Right");
	msSecondaryFunctionList.removeElement("Foot Problem- Left");
	msSecondaryFunctionList.add("Foot Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Foot Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Foot Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Problem- Both\n");
	if(rightFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftFootProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Foot Problem- Right");
		msDirectRelatedList.removeElement("Foot Problem- Left");
		msDirectRelatedList.add("Foot Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Foot Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Foot Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Problem- Both\n");
	}
}
//Check for Primary 'Both Foot Problem'
if(msPrimaryClaimsList.contains("Foot Problem- Right") && msPrimaryClaimsList.contains("Foot Problem- Left"))
{
	//Vet connected for Both Foot Problem
	msPrimaryClaimsList.removeElement("Foot Problem- Right");
	msPrimaryClaimsList.removeElement("Foot Problem- Left");
	msPrimaryClaimsList.add("Foot Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Foot Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Foot Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Problem- Both\n");
}
//// END FOOT PROBLEM
//// START FOOT ARTHRITIS
//Check for Secondary 'Both Foot Arthritis'
if(msSecondaryFunctionList.contains("Foot Arthritis- Right") && msSecondaryFunctionList.contains("Foot Arthritis- Left"))
{
	//Vet not connected for Both Foot Arthritis
	msSecondaryFunctionList.removeElement("Foot Arthritis- Right");
	msSecondaryFunctionList.removeElement("Foot Arthritis- Left");
	msSecondaryFunctionList.add("Foot Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Foot Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Foot Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Foot Arthritis- Both\n");
	if(rightFootArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftFootArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Foot Arthritis- Right");
		msDirectRelatedList.removeElement("Foot Arthritis- Left");
		msDirectRelatedList.add("Foot Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Foot Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Foot Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Foot Arthritis- Both\n");
	}
}
//Check for Primary 'Both Foot Arthritis'
if(msPrimaryClaimsList.contains("Foot Arthritis- Right") && msPrimaryClaimsList.contains("Foot Arthritis- Left"))
{
	//Vet connected for Both Foot Arthritis
	msPrimaryClaimsList.removeElement("Foot Arthritis- Right");
	msPrimaryClaimsList.removeElement("Foot Arthritis- Left");
	msPrimaryClaimsList.add("Foot Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Foot Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Foot Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Foot Arthritis- Both\n");
}
//// END FOOT ARTHRITIS
////START PES PLANUS
//Check for Pes Planus
const pesPlanus = ms.get("Pes_Planus");
//Initialize variable for .get function
if(leChecklist.contains("Flat Feet (Pes Planus)") && pesPlanus.notContains("I do not have this condition"))
{
	if(pesPlanus.contains("I applied for this and I am currently waiting on a VA decision") || pesPlanus.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || pesPlanus.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || pesPlanus.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || pesPlanus.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || pesPlanus.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Right Foot Arthritis
		msSecondaryFunctionList.add("Pes Planus");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Pes Planus\n");
		if(pesPlanus.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Pes Planus");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Pes Planus\n");
		}
	}
	else
	{
		//Vet connected for Right Foot Arthritis
		msPrimaryClaimsList.add("Pes Planus");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Pes Planus\n");
	}
}
//// END PES PLANUS
//// START PLANTAR FASCIITIS
//Check for Right Foot Plantar Fasciitis
const rightPlantarFascil = ms.get("Plantar_Fasciitis_Right");
//Initialize variable for .get function
if(leChecklist.contains("Plantar Fasciitis- Right") && rightPlantarFascil.notContains("I do not have this condition"))
{
	if(rightPlantarFascil.contains("I applied for this and I am currently waiting on a VA decision") || rightPlantarFascil.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightPlantarFascil.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightPlantarFascil.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightPlantarFascil.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Right Foot Plantar Fasciitis
		msSecondaryFunctionList.add("Plantar Fasciitis- Right");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Plantar Fasciitis- Right\n");
		if(rightPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Plantar Fasciitis- Right");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Plantar Fasciitis- Right\n");
		}
	}
	else
	{
		//Vet connected for Right Foot Plantar Fasciitis
		msPrimaryClaimsList.add("Plantar Fasciitis- Right");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Plantar Fasciitis- Right\n");
	}
}
//Check for Left Foot Plantar Fasciitis
const leftPlantarFascil = ms.get("Plantar_Fasciitis_Left");
//Initialize variable for .get function
if(leChecklist.contains("Plantar Fasciitis- Left") && leftPlantarFascil.notContains("I do not have this condition"))
{
	if(leftPlantarFascil.contains("I applied for this and I am currently waiting on a VA decision") || leftPlantarFascil.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftPlantarFascil.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftPlantarFascil.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftPlantarFascil.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Left Foot Plantar Fasciitis
		msSecondaryFunctionList.add("Plantar Fasciitis- Left");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Plantar Fasciitis- Left\n");
		if(leftPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Plantar Fasciitis- Left");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Plantar Fasciitis- Left\n");
		}
	}
	else
	{
		//Vet connected for Left Foot Plantar Fasciitis
		msPrimaryClaimsList.add("Plantar Fasciitis- Left");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Plantar Fasciitis- Left\n");
	}
}
//Check for Secondary 'Both Foot Plantar Fasciitis'
if(msSecondaryFunctionList.contains("Plantar Fasciitis- Right") && msSecondaryFunctionList.contains("Plantar Fasciitis- Left"))
{
	//Vet not connected for Both Foot Plantar Fasciitis
	msSecondaryFunctionList.removeElement("Plantar Fasciitis- Right");
	msSecondaryFunctionList.removeElement("Plantar Fasciitis- Left");
	msSecondaryFunctionList.add("Plantar Fasciitis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Plantar Fasciitis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Plantar Fasciitis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Plantar Fasciitis- Both\n");
	if(rightPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftPlantarFascil.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Plantar Fasciitis- Right");
		msDirectRelatedList.removeElement("Plantar Fasciitis- Left");
		msDirectRelatedList.add("Plantar Fasciitis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Plantar Fasciitis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Plantar Fasciitis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Plantar Fasciitis- Both\n");
	}
}
//Check for Primary 'Both Foot Plantar Fasciitis'
if(msPrimaryClaimsList.contains("Plantar Fasciitis- Right") && msPrimaryClaimsList.contains("Plantar Fasciitis- Left"))
{
	//Vet connected for Both Foot Plantar Fasciitis
	msPrimaryClaimsList.removeElement("Plantar Fasciitis- Right");
	msPrimaryClaimsList.removeElement("Plantar Fasciitis- Left");
	msPrimaryClaimsList.add("Plantar Fasciitis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Plantar Fasciitis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Plantar Fasciitis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Plantar Fasciitis- Both\n");
}
//// END PLANTAR FASCIITIS
//// START CHRONIC MUSCLE STRAIN
//Check for Chronic Muscle Strain in Right Leg
const rightChronicLeg = ms.get("Chronic_Leg_Right");
//Initialize variable for .get function
if(leChecklist.contains("Chronic Muscle Strain in Right Leg") && rightChronicLeg.notContains("I do not have this condition"))
{
	if(rightChronicLeg.contains("I applied for this and I am currently waiting on a VA decision") || rightChronicLeg.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightChronicLeg.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightChronicLeg.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightChronicLeg.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Chronic Muscle Strain in Right Leg
		msSecondaryFunctionList.add("Chronic Muscle Strain in Right Leg");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Right Leg\n");
		if(rightChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Chronic Muscle Strain in Right Leg");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Right Leg\n");
		}
	}
	else
	{
		//Vet connected for Chronic Muscle Strain in Right Leg
		msPrimaryClaimsList.add("Chronic Muscle Strain in Right Leg");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Right Leg\n");
	}
}
//Check for Chronic Muscle Strain in LeftLeg
const leftChronicLeg = ms.get("Chronic_Leg_Left");
//Initialize variable for .get function
if(leChecklist.contains("Chronic Muscle Strain in Left Leg") && leftChronicLeg.notContains("I do not have this condition"))
{
	if(leftChronicLeg.contains("I applied for this and I am currently waiting on a VA decision") || leftChronicLeg.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftChronicLeg.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftChronicLeg.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftChronicLeg.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Chronic Muscle Strain in LeftLeg
		msSecondaryFunctionList.add("Chronic Muscle Strain in Left Leg");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Left Leg\n");
		if(leftChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Chronic Muscle Strain in Left Leg");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Left Leg\n");
		}
	}
	else
	{
		//Vet connected for Chronic Muscle Strain in LeftLeg
		msPrimaryClaimsList.add("Chronic Muscle Strain in Left Leg");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Left Leg\n");
	}
}
//Check for Chronic Muscle Strain in Both Legs
if(msSecondaryFunctionList.contains("Chronic Muscle Strain in Right Leg") && msSecondaryFunctionList.contains("Chronic Muscle Strain in Left Leg"))
{
	//Vet not connected for Chronic Muscle Strain in Both Legs
	msSecondaryFunctionList.removeElement("Chronic Muscle Strain in Right Leg");
	msSecondaryFunctionList.removeElement("Chronic Muscle Strain in Left Leg");
	msSecondaryFunctionList.add("Chronic Muscle Strain in Both Legs");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Chronic Muscle Strain in Right Leg\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Chronic Muscle Strain in Left Leg\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Both Legs\n");
	if(rightChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftChronicLeg.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Chronic Muscle Strain in Right Leg");
		msDirectRelatedList.removeElement("Chronic Muscle Strain in Left Leg");
		msDirectRelatedList.add("Chronic Muscle Strain in Both Legs");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Chronic Muscle Strain in Right Leg\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Chronic Muscle Strain in Left Leg\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Both Legs\n");
	}
}
//Check for Chronic Muscle Strain in Both Legs
if(msPrimaryClaimsList.contains("Chronic Muscle Strain in Right Leg") && msPrimaryClaimsList.contains("Chronic Muscle Strain in Left Leg"))
{
	//Vet connected for Chronic Muscle Strain in Both Legs
	msPrimaryClaimsList.removeElement("Chronic Muscle Strain in Right Leg");
	msPrimaryClaimsList.removeElement("Chronic Muscle Strain in Left Leg");
	msPrimaryClaimsList.add("Chronic Muscle Strain in Both Legs");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Chronic Muscle Strain in Right Leg\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Chronic Muscle Strain in Left Leg\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Both Legs\n");
}
//// END CHRONIC MUSCLE STRAIN
/*END LE MS







Start of Upper Extremity Check */
const ueChecklist = ms.get("Upper_Extremity_Select");
//Check for Right Shoulder Problem
const rightShoulderProb = ms.get("Shoulder_Prob_Right");
//Check for Right Shoulder Arthritis
const rightShoulderArthritis = ms.get("Shoulder_Right_Joint");
if(ueChecklist.contains("Shoulder Problem- Right") && rightShoulderProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(rightShoulderProb.contains("I applied for this and I am currently waiting on a VA decision") || rightShoulderProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightShoulderProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightShoulderProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightShoulderProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightShoulderArthritis == "Yes")
		{
			//Vet not connected for Right Shoulder Arthritis
			msSecondaryFunctionList.add("Shoulder Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Arthritis- Right\n");
			if(rightShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Shoulder Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Arthritis- Right\n");
			}
		}
		else if(rightShoulderArthritis == "No")
		{
			//Vet not connected for Right Shoulder Problem
			msSecondaryFunctionList.add("Shoulder Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Problem- Right\n");
			if(rightShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Shoulder Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightShoulderArthritis == "Yes")
		{
			//Vet connected for Left Shoulder Arthritis
			msPrimaryClaimsList.add("Shoulder Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Arthritis- Right\n");
		}
		else if(rightShoulderArthritis == "No")
		{
			//Vet connected for Right Shoulder Problem
			msPrimaryClaimsList.add("Shoulder Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Problem- Right\n");
		}
	}
}
//Check for Left Shoulder Problem
const leftShoulderProb = ms.get("Shoulder_Prob_Left");
//Check for Shoulder Arthritis Left
const leftShoulderArthritis = ms.get("Shoulder_Left_Joint");
//Initialize variable for .get function
if(ueChecklist.contains("Shoulder Problem- Left") && leftShoulderProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(leftShoulderProb.contains("I applied for this and I am currently waiting on a VA decision") || leftShoulderProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftShoulderProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftShoulderProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftShoulderProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftShoulderArthritis == "Yes")
		{
			//Vet not connected for Left Shoulder Arthritis
			msSecondaryFunctionList.add("Shoulder Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Arthritis- Left\n");
			if(leftShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Shoulder Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Arthritis- Left\n");
			}
		}
		else if(leftShoulderArthritis == "No")
		{
			//Vet not connected for Left Shoulder Problem
			msSecondaryFunctionList.add("Shoulder Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Problem- Left\n");
			if(leftShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Shoulder Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftShoulderArthritis == "Yes")
		{
			//Vet connected for Left Shoulder Arthritis
			msPrimaryClaimsList.add("Shoulder Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Arthritis- Left\n");
		}
		else if(leftShoulderArthritis == "No")
		{
			//Vet connected for Left Shoulder Problem
			msPrimaryClaimsList.add("Shoulder Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Problem- Left\n");
		}
	}
}
//Check for Both Shoulder Problem
if(msSecondaryFunctionList.contains("Shoulder Problem- Right") && msSecondaryFunctionList.contains("Shoulder Problem- Left"))
{
	//Vet not connected for Both Shoulder Problem
	msSecondaryFunctionList.removeElement("Shoulder Problem- Right");
	msSecondaryFunctionList.removeElement("Shoulder Problem- Left");
	msSecondaryFunctionList.add("Shoulder Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Shoulder Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Shoulder Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Problem- Both\n");
	if(rightShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftShoulderProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Shoulder Problem- Right");
		msDirectRelatedList.removeElement("Shoulder Problem- Left");
		msDirectRelatedList.add("Shoulder Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Shoulder Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Shoulder Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Problem- Both\n");
	}
}
//Check for Both Shoulder Problem
if(msPrimaryClaimsList.contains("Shoulder Problem- Right") && msPrimaryClaimsList.contains("Shoulder Problem- Left"))
{
	//Vet connected for Both Shoulder Problem
	msPrimaryClaimsList.removeElement("Shoulder Problem- Right");
	msPrimaryClaimsList.removeElement("Shoulder Problem- Left");
	msPrimaryClaimsList.add("Shoulder Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Shoulder Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Shoulder Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Problem- Both\n");
}
//Check for Both Shoulder Arthritis - Secondary
if(msSecondaryFunctionList.contains("Shoulder Arthritis- Right") && msSecondaryFunctionList.contains("Shoulder Arthritis- Left"))
{
	//Vet not connected for Both Shoulder Arthritis
	msSecondaryFunctionList.removeElement("Shoulder Arthritis- Right");
	msSecondaryFunctionList.removeElement("Shoulder Arthritis- Left");
	msSecondaryFunctionList.add("Shoulder Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Shoulder Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Shoulder Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Shoulder Arthritis- Both\n");
	if(rightShoulderArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftShoulderArthritis.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Shoulder Arthritis- Right");
		msDirectRelatedList.removeElement("Shoulder Arthritis- Left");
		msDirectRelatedList.add("Shoulder Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Shoulder Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Shoulder Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Shoulder Arthritis- Both\n");
	}
}
//Check for Both Shoulder Arthritis - Primary
if(msPrimaryClaimsList.contains("Shoulder Arthritis- Right") && msPrimaryClaimsList.contains("Shoulder Arthritis- Left"))
{
	//Vet connected for Both Shoulder Arthritis
	msPrimaryClaimsList.removeElement("Shoulder Arthritis- Right");
	msPrimaryClaimsList.removeElement("Shoulder Arthritis- Left");
	msPrimaryClaimsList.add("Shoulder Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Shoulder Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Shoulder Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Shoulder Arthritis- Both\n");
}
//Check for Right Elbow Problem
const rightElbowProb = ms.get("Elbow_Prob_Right");
//Check for Right Elbow Arthritis
const rightElbowArth = ms.get("Elbow_Right_Joint");
//Initialize variable for .get function
if(ueChecklist.contains("Elbow Problem- Right") && rightElbowProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(rightElbowProb.contains("I applied for this and I am currently waiting on a VA decision") || rightElbowProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightElbowProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightElbowProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightElbowProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightElbowArth == "Yes")
		{
			//Vet not connected for Right Elbow Arthritis
			msSecondaryFunctionList.add("Elbow Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Arthritis- Right\n");
			if(rightElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Elbow Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Arthritis- Right\n");
			}
		}
		else if(rightElbowArth == "No")
		{
			//Vet not connected for Right Elbow Problem
			msSecondaryFunctionList.add("Elbow Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Problem- Right\n");
			if(rightElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Elbow Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Problem- Right\n");
			}
		}
	}
	else
	{
		if(leftHipArthritis == "Yes")
		{
			//Vet connected for Right Elbow Arthritis
			msPrimaryClaimsList.add("Elbow Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Arthritis- Right\n");
		}
		else if(leftHipArthritis == "No")
		{
			//Vet connected for Right Elbow Problem
			msPrimaryClaimsList.add("Elbow Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Problem- Right\n");
		}
	}
}
//Check for Left Elbow Problem
const leftElbowProb = ms.get("Elbow_Prob_Left");
//Check for Left Elbow Arthritis
const leftElbowArth = ms.get("Elbow_Left_Joint");
//Check for Left Elbow Problem
if(ueChecklist.contains("Elbow Problem- Left") && leftElbowProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(leftElbowProb.contains("I applied for this and I am currently waiting on a VA decision") || leftElbowProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftElbowProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftElbowProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftElbowProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftElbowArth == "Yes")
		{
			//Vet not connected for Left Elbow Arthritis
			msSecondaryFunctionList.add("Elbow Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Arthritis- Left\n");
			if(leftElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Elbow Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Arthritis- Left\n");
			}
		}
		else if(leftElbowArth == "No")
		{
			//Vet not connected for Left Elbow Problem
			msSecondaryFunctionList.add("Elbow Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Problem- Left\n");
			if(leftElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Elbow Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftElbowArth == "Yes")
		{
			//Vet connected for Left Elbow Arthritis
			msPrimaryClaimsList.add("Elbow Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Arthritis- Left\n");
		}
		else if(leftElbowArth == "No")
		{
			//Vet connected for Left Elbow Problem
			msPrimaryClaimsList.add("Elbow Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Problem- Left\n");
		}
	}
}
//Check for Both Elbow Problem - Secondary
if(msSecondaryFunctionList.contains("Elbow Problem- Right") && msSecondaryFunctionList.contains("Elbow Problem- Left"))
{
	//Vet not connected for Both Elbow Problem
	msSecondaryFunctionList.removeElement("Elbow Problem- Right");
	msSecondaryFunctionList.removeElement("Elbow Problem- Left");
	msSecondaryFunctionList.add("Elbow Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Elbow Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Elbow Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Problem- Both\n");
	if(rightElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftElbowProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Elbow Problem- Right");
		msDirectRelatedList.removeElement("Elbow Problem- Left");
		msDirectRelatedList.add("Elbow Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Elbow Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Elbow Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Problem- Both\n");
	}
}
//Check for Both Elbow Problem - Primary
if(msPrimaryClaimsList.contains("Elbow Problem- Right") && msPrimaryClaimsList.contains("Elbow Problem- Left"))
{
	//Vet connected for Both Elbow Problem
	msPrimaryClaimsList.removeElement("Elbow Problem- Right");
	msPrimaryClaimsList.removeElement("Elbow Problem- Left");
	msPrimaryClaimsList.add("Elbow Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Elbow Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Elbow Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Problem- Both\n");
}
//Check for Both Elbow Arthritis - Secondary
if(msSecondaryFunctionList.contains("Elbow Arthritis- Right") && msSecondaryFunctionList.contains("Elbow Arthritis- Left"))
{
	//Vet not connected for Both Elbow Arthritis
	msSecondaryFunctionList.removeElement("Elbow Arthritis- Right");
	msSecondaryFunctionList.removeElement("Elbow Arthritis- Left");
	msSecondaryFunctionList.add("Elbow Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Elbow Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Elbow Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Elbow Arthritis- Both\n");
	if(rightElbowArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftElbowArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Elbow Arthritis- Right");
		msDirectRelatedList.removeElement("Elbow Arthritis- Left");
		msDirectRelatedList.add("Elbow Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Elbow Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Elbow Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Elbow Arthritis- Both\n");
	}
}
//Check for Both Elbow Arthritis - Primary
if(msPrimaryClaimsList.contains("Elbow Arthritis- Right") && msPrimaryClaimsList.contains("Elbow Arthritis- Left"))
{
	//Vet connected for Both Elbow Arthritis
	msPrimaryClaimsList.removeElement("Elbow Arthritis- Right");
	msPrimaryClaimsList.removeElement("Elbow Arthritis- Left");
	msPrimaryClaimsList.add("Elbow Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Elbow Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Elbow Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Elbow Arthritis- Both\n");
}
//Check for Right Wrist Problem
const rightWristProb = ms.get("Wrist_Prob_Right");
//Check for Right Wrist Arthritis
const rightWristArth = ms.get("Wrist_Right_Joint");
//Initialize variable for .get function
if(ueChecklist.contains("Wrist Problem- Right") && rightWristProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(rightWristProb.contains("I applied for this and I am currently waiting on a VA decision") || rightWristProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightWristProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightWristProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightWristProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightWristArth == "Yes")
		{
			//Vet not connected for Right Wrist Arthritis
			msSecondaryFunctionList.add("Wrist Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Arthritis- Right\n");
			if(rightWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Wrist Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Arthritis- Right\n");
			}
		}
		else if(rightWristArth == "No")
		{
			//Vet not connected for Right Wrist Problem
			msSecondaryFunctionList.add("Wrist Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Problem- Right\n");
			if(rightWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Wrist Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightWristArth == "Yes")
		{
			//Vet connected for Right Wrist Arthritis
			msPrimaryClaimsList.add("Wrist Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Arthritis- Right\n");
		}
		else if(rightWristArth == "No")
		{
			//Vet connected for Right Wrist Problem
			msPrimaryClaimsList.add("Wrist Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Problem- Right\n");
		}
	}
}
//Check for Left Wrist Problem
const leftWristProb = ms.get("Wrist_Prob_Left");
//Check for Left Wrist Arthritis
const leftWristArth = ms.get("Wrist_Left_Joint");
if(ueChecklist.contains("Wrist Problem- Left") && leftWristProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(leftWristProb.contains("I applied for this and I am currently waiting on a VA decision") || leftWristProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftWristProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftWristProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftWristProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftWristArth == "Yes")
		{
			//Vet not connected for Left Wrist Arthritis
			msSecondaryFunctionList.add("Wrist Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Arthritis- Left\n");
			if(leftWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Wrist Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Arthritis- Left\n");
			}
		}
		else if(leftWristArth == "No")
		{
			//Vet not connected for Left Wrist Problem
			msSecondaryFunctionList.add("Wrist Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Problem- Left\n");
			if(leftWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Wrist Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftWristArth == "Yes")
		{
			//Vet connected for Left Wrist Arthritis
			msPrimaryClaimsList.add("Wrist Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Arthritis- Left\n");
		}
		else if(leftWristArth == "No")
		{
			//Vet connected for Left Wrist Problem
			msPrimaryClaimsList.add("Wrist Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Problem- Left\n");
		}
	}
}
//Check for Both Wrist Problems - Secondary
if(msSecondaryFunctionList.contains("Wrist Problem- Right") && msSecondaryFunctionList.contains("Wrist Problem- Left"))
{
	//Vet not connected for Both Wrist Problem
	msSecondaryFunctionList.removeElement("Wrist Problem- Right");
	msSecondaryFunctionList.removeElement("Wrist Problem- Left");
	msSecondaryFunctionList.add("Wrist Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Wrist Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Wrist Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Problem- Both\n");
	if(rightWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftWristProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Wrist Problem- Right");
		msDirectRelatedList.removeElement("Wrist Problem- Left");
		msDirectRelatedList.add("Wrist Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Wrist Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Wrist Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Problem- Both\n");
	}
}
//Check for Both Wrist Problem - Primary
if(msPrimaryClaimsList.contains("Wrist Problem- Right") && msPrimaryClaimsList.contains("Wrist Problem- Left"))
{
	//Vet connected for Both Wrist Problem
	msPrimaryClaimsList.removeElement("Wrist Problem- Right");
	msPrimaryClaimsList.removeElement("Wrist Problem- Left");
	msPrimaryClaimsList.add("Wrist Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Wrist Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Wrist Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Problem- Both\n");
}
//Check for Both Wrist Arthritis - Secondary
if(msSecondaryFunctionList.contains("Wrist Arthritis- Right") && msSecondaryFunctionList.contains("Wrist Arthritis- Left"))
{
	//Vet not connected for Both Wrist Arthritis
	msSecondaryFunctionList.removeElement("Wrist Arthritis- Right");
	msSecondaryFunctionList.removeElement("Wrist Arthritis- Left");
	msSecondaryFunctionList.add("Wrist Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Wrist Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Wrist Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Wrist Arthritis- Both\n");
	if(rightWristArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftWristArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Wrist Arthritis- Right");
		msDirectRelatedList.removeElement("Wrist Arthritis- Left");
		msDirectRelatedList.add("Wrist Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Wrist Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Wrist Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Wrist Arthritis- Both\n");
	}
}
//Check for Both Wrist Arthritis - Primary
if(msPrimaryClaimsList.contains("Wrist Arthritis- Right") && msPrimaryClaimsList.contains("Wrist Arthritis- Left"))
{
	//Vet connected for Both Wrist Arthritis
	msPrimaryClaimsList.removeElement("Wrist Arthritis- Right");
	msPrimaryClaimsList.removeElement("Wrist Arthritis- Left");
	msPrimaryClaimsList.add("Wrist Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Wrist Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Wrist Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Wrist Arthritis- Both\n");
}
//Check for Right Hand or Finger Problem
const rightHandProb = ms.get("Hand_Prob_Right");
//Check for Right Hand or Finger Arthritis
const rightHandArth = ms.get("Hand_Right_Joint");
//Initialize variable for .get function
if(ueChecklist.contains("Hand or Finger Problem- Right") && rightHandProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(rightHandProb.contains("I applied for this and I am currently waiting on a VA decision") || rightHandProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightHandProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightHandProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightHandProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(rightHandArth == "Yes")
		{
			//Vet not connected for Right Hand or Finger Arthritis
			msSecondaryFunctionList.add("Hand or Finger Arthritis- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Arthritis- Right\n");
			if(rightHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hand or Finger Arthritis- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Arthritis- Right\n");
			}
		}
		else if(rightHandArth == "No")
		{
			//Vet not connected for Right Hand or Finger Problem
			msSecondaryFunctionList.add("Hand or Finger Problem- Right");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Problem- Right\n");
			if(rightHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hand or Finger Problem- Right");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Problem- Right\n");
			}
		}
	}
	else
	{
		if(rightHandArth == "Yes")
		{
			//Vet connected for Right Hand or Finger Arthritis
			msPrimaryClaimsList.add("Hand or Finger Arthritis- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Arthritis- Right\n");
		}
		else if(rightHandArth == "No")
		{
			//Vet connected for Right Hand or Finger Problem
			msPrimaryClaimsList.add("Hand or Finger Problem- Right");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Problem- Right\n");
		}
	}
}
//Check for Left Hand or Finger Problem
const leftHandProb = ms.get("Hand_Prob_Left");
//Check for Left Hand or Finger Arthritis
const leftHandArth = ms.get("Hand_Left_Joint");
if(ueChecklist.contains("Hand or Finger Problem- Left") && leftHandProb.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(leftHandProb.contains("I applied for this and I am currently waiting on a VA decision") || leftHandProb.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftHandProb.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftHandProb.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftHandProb.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(leftHandArth == "Yes")
		{
			//Vet not connected for Left Hand or Finger Arthritis
			msSecondaryFunctionList.add("Hand or Finger Arthritis- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Arthritis- Left\n");
			if(leftHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hand or Finger Arthritis- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Arthritis- Left\n");
			}
		}
		else if(leftHandArth == "No")
		{
			//Vet not connected for Left Hand or Finger Problem
			msSecondaryFunctionList.add("Hand or Finger Problem- Left");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Problem- Left\n");
			if(leftHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Hand or Finger Problem- Left");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Problem- Left\n");
			}
		}
	}
	else
	{
		if(leftHandArth == "Yes")
		{
			//Vet connected for Left Hand or Finger Arthritis
			msPrimaryClaimsList.add("Hand or Finger Arthritis- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Arthritis- Left\n");
		}
		else if(leftHandArth == "No")
		{
			//Vet connected for Left Hand or Finger Problem
			msPrimaryClaimsList.add("Hand or Finger Problem- Left");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Problem- Left\n");
		}
	}
}
//Check for Both Hand or Finger Problem - Primary
if(msPrimaryClaimsList.contains("Hand or Finger Problem- Right") && msPrimaryClaimsList.contains("Hand or Finger Problem- Left"))
{
	//Vet connected for Both Hand or Finger Problem
	msPrimaryClaimsList.removeElement("Hand or Finger Problem- Right");
	msPrimaryClaimsList.removeElement("Hand or Finger Problem- Left");
	msPrimaryClaimsList.add("Hand or Finger Problem- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hand or Finger Problem- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hand or Finger Problem- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Problem- Both\n");
}
//Check for Both Hand or Finger Problem - Secondary
if(msSecondaryFunctionList.contains("Hand or Finger Problem- Right") && msSecondaryFunctionList.contains("Hand or Finger Problem- Left"))
{
	//Vet not connected for Both Hand or Finger Problem
	msSecondaryFunctionList.removeElement("Hand or Finger Problem- Right");
	msSecondaryFunctionList.removeElement("Hand or Finger Problem- Left");
	msSecondaryFunctionList.add("Hand or Finger Problem- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hand or Finger Problem- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hand or Finger Problem- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Problem- Both\n");
	if(rightHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftHandProb.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Hand or Finger Problem- Right");
		msDirectRelatedList.removeElement("Hand or Finger Problem- Left");
		msDirectRelatedList.add("Hand or Finger Problem- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hand or Finger Problem- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hand or Finger Problem- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Problem- Both\n");
	}
}
//Check for Both Hand or Finger Arthritis - Primary
if(msPrimaryClaimsList.contains("Hand or Finger Arthritis- Right") && msPrimaryClaimsList.contains("Hand or Finger Arthritis- Left"))
{
	//Vet connected for Both Hand or Finger Arthritis
	msPrimaryClaimsList.removeElement("Hand or Finger Arthritis- Right");
	msPrimaryClaimsList.removeElement("Hand or Finger Arthritis- Left");
	msPrimaryClaimsList.add("Hand or Finger Arthritis- Both");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hand or Finger Arthritis- Right\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Hand or Finger Arthritis- Left\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Hand or Finger Arthritis- Both\n");
}
//Check for Both Hand or Finger Arthritis - Secondary
if(msSecondaryFunctionList.contains("Hand or Finger Arthritis- Right") && msSecondaryFunctionList.contains("Hand or Finger Arthritis- Left"))
{
	//Vet not connected for Both Hand or Finger Arthritis
	msSecondaryFunctionList.removeElement("Hand or Finger Arthritis- Right");
	msSecondaryFunctionList.removeElement("Hand or Finger Arthritis- Left");
	msSecondaryFunctionList.add("Hand or Finger Arthritis- Both");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hand or Finger Arthritis- Right\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Hand or Finger Arthritis- Left\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Hand or Finger Arthritis- Both\n");
	if(rightHandArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftHandArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Hand or Finger Arthritis- Right");
		msDirectRelatedList.removeElement("Hand or Finger Arthritis- Left");
		msDirectRelatedList.add("Hand or Finger Arthritis- Both");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hand or Finger Arthritis- Right\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Hand or Finger Arthritis- Left\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Hand or Finger Arthritis- Both\n");
	}
}
//Check for Chronic Muscle Strain in Right Arm or Shoulder
const rightChronicArm = ms.get("Chronic_Arm_Right");
//Check for Chronic Muscle Strain in Left Arm or Shoulder
const leftChronicArm = ms.get("Chronic_Arm_Left");
//Initialize variable for .get function
if(ueChecklist.contains("Chronic Muscle Strain in Right Arm or Shoulder") && rightChronicArm.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(rightChronicArm.contains("I applied for this and I am currently waiting on a VA decision") || rightChronicArm.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || rightChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || rightChronicArm.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || rightChronicArm.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || rightChronicArm.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Chronic Muscle Strain in Right Arm or Shoulder
		msSecondaryFunctionList.add("Chronic Muscle Strain in Right Arm or Shoulder");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Right Arm or Shoulder\n");
		if(rightChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Chronic Muscle Strain in Right Arm or Shoulder");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Right Arm or Shoulder\n");
		}
	}
	else
	{
		//Vet connected for Chronic Muscle Strain in Right Arm or Shoulder
		msPrimaryClaimsList.add("Chronic Muscle Strain in Right Arm or Shoulder");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Right Arm or Shoulder\n");
	}
}
//Check for Chronic Muscle Strain in Left Arm or Shoulder
if(ueChecklist.contains("Chronic Muscle Strain in Left Arm or Shoulder") && leftChronicArm.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(leftChronicArm.contains("I applied for this and I am currently waiting on a VA decision") || leftChronicArm.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || leftChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || leftChronicArm.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || leftChronicArm.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || leftChronicArm.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Chronic Muscle Strain in Left Arm or Shoulder
		msSecondaryFunctionList.add("Chronic Muscle Strain in Left Arm or Shoulder");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Left Arm or Shoulder\n");
		if(leftChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Chronic Muscle Strain in Left Arm or Shoulder");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Left Arm or Shoulder\n");
		}
	}
	else
	{
		//Vet connected for Chronic Muscle Strain in Left Arm or Shoulder
		msPrimaryClaimsList.add("Chronic Muscle Strain in Left Arm or Shoulder");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Left Arm or Shoulder\n");
	}
}
//Check for Chronic Muscle Strain in Both Arms or Shoulders - Primary
if(msPrimaryClaimsList.contains("Chronic Muscle Strain in Right Arm or Shoulder") && msPrimaryClaimsList.contains("Chronic Muscle Strain in Left Arm or Shoulder"))
{
	//Vet connected for Chronic Muscle Strain in Both Arms or Shoulders
	msPrimaryClaimsList.removeElement("Chronic Muscle Strain in Right Arm or Shoulder");
	msPrimaryClaimsList.removeElement("Chronic Muscle Strain in Left Arm or Shoulder");
	msPrimaryClaimsList.add("Chronic Muscle Strain in Both Arms or Shoulders");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Chronic Muscle Strain in Right Arm or Shoulder\n");
	msPrimaryFormattedList = msPrimaryFormattedList.remove("Chronic Muscle Strain in Left Arm or Shoulder\n");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Chronic Muscle Strain in Both Arms or Shoulders\n");
}
//Check for Chronic Muscle Strain in Both Arms or Shoulders - Secondary
if(msSecondaryFunctionList.contains("Chronic Muscle Strain in Right Arm or Shoulder") && msSecondaryFunctionList.contains("Chronic Muscle Strain in Left Arm or Shoulder"))
{
	//Vet not connected for Chronic Muscle Strain in Both Arms or Shoulders
	msSecondaryFunctionList.removeElement("Chronic Muscle Strain in Right Arm or Shoulder");
	msSecondaryFunctionList.removeElement("Chronic Muscle Strain in Left Arm or Shoulder");
	msSecondaryFunctionList.add("Chronic Muscle Strain in Both Arms or Shoulders");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Chronic Muscle Strain in Right Arm or Shoulder\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.remove("Chronic Muscle Strain in Left Arm or Shoulder\n");
	msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Chronic Muscle Strain in Both Arms or Shoulders\n");
	if(rightChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty") && leftChronicArm.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
	{
		msDirectRelatedList.removeElement("Chronic Muscle Strain in Right Arm or Shoulder");
		msDirectRelatedList.removeElement("Chronic Muscle Strain in Left Arm or Shoulder");
		msDirectRelatedList.add("Chronic Muscle Strain in Both Arms or Shoulders");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Chronic Muscle Strain in Right Arm or Shoulder\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.remove("Chronic Muscle Strain in Left Arm or Shoulder\n");
		msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Chronic Muscle Strain in Both Arms or Shoulders\n");
	}
}
//
//
//
//Start of Misc MS page
//Start of Spinal conditions
const spineMiscMSChecklist = ms.get("Misc_Select");
//Check for Chronic Neck Pain
const NeckPain = ms.get("Neck_Pain");
//Check for Neck Arth
const NeckArth = ms.get("Neck_Joint");
if(spineMiscMSChecklist.contains("Strain or Chronic Pain of your Neck (Cervical Spine)") && NeckPain.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(NeckPain.contains("I applied for this and I am currently waiting on a VA decision") || NeckPain.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || NeckPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || NeckPain.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || NeckPain.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || NeckPain.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(NeckArth == "Yes")
		{
			//Vet not connected for Neck Arth
			msSecondaryFunctionList.add("Disc Disease of Neck (Cervical Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Disc Disease of Neck (Cervical Spine)\n");
			// Done updating direct for Neck Arth
			if(NeckPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Disc Disease of Neck (Cervical Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Disc Disease of Neck (Cervical Spine)\n");
			}
		}
		else if(NeckArth == "No")
		{
			//Vet not connected for Neck Pain
			msSecondaryFunctionList.add("Strain or Chronic Pain of your Neck (Cervical Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Strain or Chronic Pain of your Neck (Cervical Spine)\n");
			//Done updating direct for Neck Pain
			if(NeckPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Strain or Chronic Pain of your Neck (Cervical Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Strain or Chronic Pain of your Neck (Cervical Spine)\n");
			}
		}
	}
	else
	{
		if(NeckArth == "Yes")
		{
			//Vet connected for Neck Arth
			msPrimaryClaimsList.add("Disc Disease of Neck (Cervical Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Disc Disease of Neck (Cervical Spine)\n");
		}
		else if(NeckArth == "No")
		{
			//Vet connected for Neck Pain
			msPrimaryClaimsList.add("Strain or Chronic Pain of Neck (Cervical Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Strain or Chronic Pain of Neck (Cervical Spine)\n");
		}
	}
}
//Check for Lower Back Pain
const LowerBackPain = ms.get("Lower_Back_Pain");
//Check for Lower Back Arth
const LowerBackArth = ms.get("Lower_Back_Joint");
if(spineMiscMSChecklist.contains("Strain or Chronic Pain of your Lower Back (Lumbar Spine)") && LowerBackPain.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(LowerBackPain.contains("I applied for this and I am currently waiting on a VA decision") || LowerBackPain.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || LowerBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || LowerBackPain.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || LowerBackPain.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || LowerBackPain.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(LowerBackArth == "Yes")
		{
			//Vet not connected for Lower Back Arth
			msSecondaryFunctionList.add("Disc Disease of Lower Back (Lumbar Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Disc Disease of Lower Back (Lumbar Spine)\n");
			//Done updating direct for Lower Back Arth
			if(LowerBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Disc Disease of Lower Back (Lumbar Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Disc Disease of Lower Back (Lumbar Spine)\n");
			}
		}
		else if(LowerBackArth == "No")
		{
			//Vet connected for Lower Back Pain
			msSecondaryFunctionList.add("Strain or Chronic Pain of Lower Back (Lumbar Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Strain or Chronic Pain of Lower Back (Lumbar Spine)\n");
			//Done updating direct for Lower Back Pain
			if(LowerBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Strain or Chronic Pain of Lower Back (Lumbar Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Strain or Chronic Pain of Lower Back (Lumbar Spine)\n");
			}
		}
	}
	else
	{
		if(LowerBackArth == "Yes")
		{
			//Vet connected for Lower Back Arth
			msPrimaryClaimsList.add("Disc Disease of Lower Back (Lumbar Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Disc Disease of Lower Back (Lumbar Spine)\n");
		}
		else if(LowerBackArth == "No")
		{
			//Vet connected for Lower Back Pain
			msPrimaryClaimsList.add("Strain or Chronic Pain of Lower Back (Lumbar Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Strain or Chronic Pain of Lower Back (Lumbar Spine)\n");
		}
	}
}
//Check for Mid Back Pain
const MidBackPain = ms.get("Mid_Back_Pain");
//Check for Mid Back Arth
const MidBackArth = ms.get("Mid_Back_Joint");
if(spineMiscMSChecklist.contains("Strain or Chronic Pain of your Mid Back (Thoracic Spine)") && MidBackPain.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(MidBackPain.contains("I applied for this and I am currently waiting on a VA decision") || MidBackPain.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || MidBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || MidBackPain.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || MidBackPain.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || MidBackPain.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		if(MidBackArth == "Yes")
		{
			//Vet not connected for Mid Back Arth
			msSecondaryFunctionList.add("Disc Disease of Mid Back (Thoracic Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Disc Disease of Mid Back (Thoracic Spine)\n");
			//Done updating direct for Mid Back Arth
			if(MidBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Disc Disease of Mid Back (Thoracic Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Disc Disease of Mid Back (Thoracic Spine)\n");
			}
		}
		else if(MidBackArth == "No")
		{
			//Vet connected for Mid Back Pain
			msSecondaryFunctionList.add("Strain or Chronic Pain of Mid Back (Thoracic Spine)");
			msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Strain or Chronic Pain of Mid Back (Thoracic Spine)\n");
			//Done updating direct for Mid Back Pain
			if(MidBackPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
			{
				msDirectRelatedList.add("Strain or Chronic Pain of Mid Back (Thoracic Spine)");
				msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Strain or Chronic Pain of Mid Back (Thoracic Spine)\n");
			}
		}
	}
	else
	{
		if(MidBackArth == "Yes")
		{
			//Vet connected for Mid Back Arth
			msPrimaryClaimsList.add("Disc Disease of Mid Back (Thoracic Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Disc Disease of Mid Back (Thoracic Spine)\n");
		}
		else if(MidBackArth == "No")
		{
			//Vet connected for Mid Back Pain
			msPrimaryClaimsList.add("Strain or Chronic Pain of Mid Back (Thoracic Spine)");
			msPrimaryFormattedList = msPrimaryFormattedList.concat("Strain or Chronic Pain of Mid Back (Thoracic Spine)\n");
		}
	}
}
//End of Spinal Conditions
//
//Start of Other Conditions
//Check for Gout (Rheumatoid Arthritis)
const gout = ms.get("Gout");
//Initialize variable for .get function
if(spineMiscMSChecklist.contains("Gout or Rheumatoid Arthritis") && gout.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(gout.contains("I applied for this and I am currently waiting on a VA decision") || gout.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || gout.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || gout.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || gout.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || gout.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Gout
		msSecondaryFunctionList.add("Gout or Rheumatoid Arthritis");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Gout or Rheumatoid Arthritis\n");
		//Done updating direct for Gout
		if(gout.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Gout or Rheumatoid Arthritis");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Gout or Rheumatoid Arthritis\n");
		}
	}
	else
	{
		//Vet connected for Gout
		msPrimaryClaimsList.add("Gout or Rheumatoid Arthritis");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Gout or Rheumatoid Arthritis\n");
	}
}
// Check for Psoriatic Arthritis
const psoriaticArth = ms.get("Psoriatic_Arth");
//Initialize variable for .get function
if(spineMiscMSChecklist.contains("Psoriatic Arthritis") && psoriaticArth.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(psoriaticArth.contains("I applied for this and I am currently waiting on a VA decision") || psoriaticArth.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || psoriaticArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || psoriaticArth.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || psoriaticArth.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || psoriaticArth.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Psoriatic Arthritis
		msSecondaryFunctionList.add("Psoriatic Arthritis");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Psoriatic Arthritis\n");
		//Updating direct for Psoriatic Arthritis
		if(psoriaticArth.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Psoriatic Arthritis");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Psoriatic Arthritis\n");
		}
	}
	else
	{
		//Vet connected for Psoriatic Arthritis
		msPrimaryClaimsList.add("Psoriatic Arthritis");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Psoriatic Arthritis\n");
	}
}
// Check for Jaw Pain/TMD
const jawPain = ms.get("Jaw_Pain");
//Initialize variable for .get function
if(spineMiscMSChecklist.contains("Jaw pain/Temporomandiubular disorder (TMD)") && jawPain.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(jawPain.contains("I applied for this and I am currently waiting on a VA decision") || jawPain.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || jawPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || jawPain.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || jawPain.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || jawPain.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Jaw Pain/TMD
		msSecondaryFunctionList.add("Jaw pain/Temporomandiubular disorder (TMD)");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Jaw pain/Temporomandiubular disorder (TMD)\n");
		//Updating direct for Jaw Pain/TMD
		if(jawPain.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Jaw pain/Temporomandiubular disorder (TMD)");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Jaw pain/Temporomandiubular disorder (TMD)\n");
		}
	}
	else
	{
		//Vet connected for Jaw Pain/TMD
		msPrimaryClaimsList.add("Jaw pain/Temporomandiubular disorder (TMD)");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Jaw pain/Temporomandiubular disorder (TMD)\n");
	}
}
// Check for Other Musculoskeletal Conditions 
const otherMS = ms.get("Other_MS_Select");
//Initialize variable for .get function
if(spineMiscMSChecklist.contains("Other Musculoskeletal Conditions (Lower and Upper Extremities as well)") && otherMS.notContains("I do not have this condition"))
{
	//Vet did not say that they do not have the condition
	if(otherMS.contains("I applied for this and I am currently waiting on a VA decision") || otherMS.contains("I never applied for this and I did not have issues or medical treatment for this while on active duty") || otherMS.contains("I never applied for this but I had issues or medical treatment for this while on active duty") || otherMS.contains("I was denied a VA rating for this condition, appealed, and am still waiting on a VA decision") || otherMS.contains("VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal") || otherMS.contains("VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal"))
	{
		//Vet not connected for Other MS Condition
		msSecondaryFunctionList.add("Other Musculoskeletal Condition (Recorded in Contact)");
		msNotConnectedFormattedList = msNotConnectedFormattedList.concat("Other Musculoskeletal Condition\n");
		//Done updating direct for Other MS Condition
		if(otherMS.contains("I never applied for this but I had issues or medical treatment for this while on active duty"))
		{
			msDirectRelatedList.add("Other Musculoskeletal Condition (Recorded in Contact)");
			msDirectRelatedFormattedList = msDirectRelatedFormattedList.concat("Other Musculoskeletal Condition (Recorded in Contact)\n");
		}
	}
	else
	{
		//Vet connected for Other MS Condition
		msPrimaryClaimsList.add("Other Musculoskeletal Condition (Recorded in Contact)");
		msPrimaryFormattedList = msPrimaryFormattedList.concat("Other Musculoskeletal Condition\n");
	}
}
// Check for Muscle Atrophy
if(ms.get("Muscle_Atrophy") == "Yes")
{
	//Vet has Muscle Atrophy
	msPrimaryClaimsList.add("Muscle Atrophy due to Disuse");
	msPrimaryFormattedList = msPrimaryFormattedList.concat("Muscle Atrophy due to Disuse\n");
}
//End of Other MS Section
//End of Spine and Misc Check

/*

Start code to populate new internal module report

*/
//Start of rearranging data
let musculoData = "";
let rating = "";
//Lower Extremity Data
let ms_le_data : string[] = ms.get("Lower_Extremity_Select");
if(ms_le_data.length !== 0 && ms_le_data.notContains("None of these apply to me"))
{
	ms_le_data.map((item : string) => {
		musculoData = musculoData.concat(item);
		musculoData = musculoData.concat(": ");
		const api_name = muscu_LE_Map.get(item);
		if(ms.contains(api_name))
		{
			if(ms.get(api_name) != null)
			{
				rating = ms.get(api_name) + "\n";
			}
			else
			{
				rating = "\n";
			}
		musculoData = musculoData.concat(rating);
		}
		if(muscu_LE_Arth_Map.get(item) != null)
		{
			const arth_api = muscu_LE_Arth_Map.get(item);
			const arth_yesno = ms.get(arth_api) + "\n";
			const arth_api_string = muscu_LE_Arth_Text_Map.get(arth_api);
			musculoData = musculoData.concat(arth_api_string);
			musculoData = musculoData.concat(": ");
			musculoData = musculoData.concat(arth_yesno);
		}
	});
	// console.log(musculoData);
}
//Upper Extremity Data
const ms_ue_data = ms.get("Upper_Extremity_Select");
if(ms_ue_data.length !== 0 && ms_ue_data.notContains("None of these apply to me"))
{
	ms_ue_data.map((item : string) => {
		musculoData = musculoData.concat(item);
		musculoData = musculoData.concat(": ");
		const api_name = muscu_UE_Map.get(item);
		if(ms.contains(api_name))
		{
			if(ms.get(api_name) != null)
			{
				rating = ms.get(api_name) + "\n";
			}
			else
			{
				rating = "\n";
			}

		  musculoData = musculoData.concat(rating);
		}
		if(muscu_UE_Arth_Map.get(item) != null)
		{
			const arth_api = muscu_UE_Arth_Map.get(item);
			const arth_yesno = ms.get(arth_api) + "\n";
			const arth_api_string = muscu_UE_Arth_Text_Map.get(arth_api);
			musculoData = musculoData.concat(arth_api_string);
			musculoData = musculoData.concat(": ");
			musculoData = musculoData.concat(arth_yesno);
		}
	});
	// console.log(musculoData);
}
//Misc Musculoskeletal Data
let ms_misc_data = ms.get("Misc_Select");
if(ms_misc_data.length !== 0 && ms_misc_data.notContains("None of these apply to me"))
{
	ms_misc_data.map((item : string) => {
		musculoData = musculoData.concat(item);
		musculoData = musculoData.concat(": ");
		let api_name = muscu_Other_Map.get(item);
		if(ms.contains(api_name))
		{
			if(ms.get(api_name) != null)
			{
				rating = ms.get(api_name) + "\n";
			}
			else
			{
				rating = "\n";
			}
		musculoData = musculoData.concat(rating);
		}
		if(muscu_Other_Arth_Map.get(item) != null)
		{
			const arth_api = muscu_Other_Arth_Map.get(item);
			const arth_yesno = ms.get(arth_api) + "\n";
			const arth_api_string = muscu_Other_Arth_Text_Map.get(arth_api);
			musculoData = musculoData.concat(arth_api_string);
			musculoData = musculoData.concat(": ");
			musculoData = musculoData.concat(arth_yesno);
		}
	});
	// console.log(musculoData);
}


  /*
    let msPrimaryClaimsList = [];
    let msPrimaryFormattedList = "";
    let msSecondaryFunctionList = [];
    let msNotConnectedFormattedList = "";
    let msDirectRelatedList = [];
    let msDirectRelatedFormattedList = "";
  */
  return {
    connectedList: msPrimaryClaimsList,
    connectedFormattedList: msPrimaryFormattedList,
    notConnectedList: msSecondaryFunctionList,
    notConnectedFormattedList: msNotConnectedFormattedList,
    directRelatedList: msDirectRelatedList,
    directRelatedFormattedList: msDirectRelatedFormattedList,
  };
};