import { expect } from 'chai';
import { msJson } from '../../constant';
import { musculoskeletal } from '../../controller/musculoskeletal';

describe('Hip joint problem/arthritis- Right - Yes', () => {
  let ms : any = {};
  let response : any = {};

  beforeEach(() => {
    ms = msJson;
    response = {};
  });

  afterEach(() => {
    ms.Lower_Extremity_Select = [];
    ms.Hip_Prob_Right = [];
    ms.Hip_Right_Joint = "";
  });

  describe('Not Connected / Direct Related', () => {
    it('I never applied for this and I did not have issues or medical treatment for this while on active duty', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I never applied for this and I did not have issues or medical treatment for this while on active duty');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.notConnectedFormattedList).to.include('Hip Arthritis- Right');
      expect(response.directRelatedList).to.not.include('Hip Arthritis- Right');
    });

    it('VA denied this over 1 year ago', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('VA denied this over 1 year ago, I am not currently rated for this, and not in an active appeal');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.notConnectedList).to.include('Hip Arthritis- Right');
    });

    it('I applied for this and I am currently waiting on a VA decision', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I applied for this and I am currently waiting on a VA decision');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.notConnectedFormattedList).to.include('Hip Arthritis- Right');
    });

    describe('Direct Related', () => {
      it('I never applied for this but I had issues or medical treatment for this while on active duty', () => {
        ms.Lower_Extremity_Select.add('Hip joint problem- Right');
        ms.Hip_Prob_Right.add('I never applied for this but I had issues or medical treatment for this while on active duty');
        ms.Hip_Right_Joint = "Yes";
    
        response = musculoskeletal(ms);
        expect(response.notConnectedFormattedList).to.include('Hip Arthritis- Right');
        expect(response.directRelatedList).to.include('Hip Arthritis- Right');
      });
    });
  });
  
  describe('Current Service Connected', () => {
    it('0%', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA service-connected for this condition but not paid compensation for it (VA rated at 0% for this condition)');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.connectedList).to.include('Hip Arthritis- Right');
    });

    it('10%', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA rated 10% for this condition');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.connectedList).to.include('Hip Arthritis- Right');
    });

    it('20%', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA rated 20% for this condition');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.connectedList).to.include('Hip Arthritis- Right');
    });

    it('30%', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA rated 30% for this condition');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.connectedList).to.include('Hip Arthritis- Right');
    });

    it('40%', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA rated 40% for this condition');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.connectedList).to.include('Hip Arthritis- Right');
    });

    it('VA denied this less than 1 year ago', () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('VA denied this less than 1 year ago, I am not currently rated for this, and not in an active appeal');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      expect(response.notConnectedList).to.include('Hip Arthritis- Right');
    });

    it("I can't remember what % rating the VA gave me", () => {
      ms.Lower_Extremity_Select.add('Hip joint problem- Right');
      ms.Hip_Prob_Right.add('I am VA rated for this condition but I can\'t remember what % rating the VA gave me or my % rating is not listed');
      ms.Hip_Right_Joint = "Yes";
  
      response = musculoskeletal(ms);
      // console.log(ms.Lower_Extremity_Select, ms.Hip_Prob_Right, ms.Hip_Right_Joint, response);
      expect(response.connectedFormattedList).to.include('Hip Arthritis- Right');
    });
  });
});