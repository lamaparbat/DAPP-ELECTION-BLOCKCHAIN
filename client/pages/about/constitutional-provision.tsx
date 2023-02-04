import React from 'react';
import Navbar from '../../components/Navbar';
import { responsive } from '../../constants';

const ConstitutionalProvision = () => {
  return (
    <div className='constitutional--provision--container'>
      <Navbar />
      <div className='flex justify-center mt-3 mb-5 px-3 lg:px-0'>
        <div className={`${responsive} flex justify-between rounded-1 flex-wrap lg:px-3`}>
          <div>
            <h4 className='my-2'>Constitutional Provision</h4>
            <p className='m-0 lg:ml-5'>Election Commission of Nepal is a constitutional Election Management Body in Nepal.
              Constitution of Nepal has made arrangements about the Election Commission in Section 24,
              article 245 to 247. The constitution has embraced the competitive multiparty democratic system,
              adult franchise and periodic elections as fundamental guiding principles of democracy.
              Depending on the constitutional provisions, the Commission has the responsibility to conduct
              the elections of different tires – federal, provincial and local bodies – as per the stipulated
              electoral systems.
            </p>
          </div>
          <div>
            <h4 className='my-2'>Election Commission</h4>
            <div className='p-0 lg:pl-5'>
              <p>1. There shall be an Election Commission in Nepal consisting of a Chief Election Commissioner and
                four other Election Commissioners. The Chief Election Commissioner shall act as the Chairperson of
                the Election Commission.</p>
              <p>2. The President shall, on the recommendation of the Constitutional Council, appoint the Chief
                Election Commissioner and the Election Commissioners.</p>
              <p>3. The term of office of the Chief Election Commissioner and the Election Commissioners shall be
                six years from the date of appointment.</p>
              <p>4. Notwithstanding anything mentioned in Clause (3), the office of the Chief Election Commissioner
                and Election Commissioner shall be deemed vacant in the following circumstances:</p>
              <div className='pl-10 -mt-3 mb-3 flex flex-column'>
                <span>a. if she/he submits a written resignation to the President,</span>
                <span>b. if she/he attains the age of sixty-five,</span>
                <span>c. if a resolution of impeachment is passed against her/him as per Article 101,</span>
                <span>d. If she/he is removed by the President on the recommendation of Constitutional Council for
                  being unable to discharge the duties of her/his office due to physical or mental illness.</span>
                <span>e. if she/he dies.</span>
              </div>
              <p>5. The Chief Commissioner and commissioner appointed pursuant to clause (2) shall not be eligible for reappointment.</p>
              <p>6. Provided that nothing in this Clause shall be deemed to be a bar to the appointment of a commissioner of the Election
                Commission as Chief Commissioner thereof, and when a Commissioner is so appointed as the Chief Commissioner,
                her/his term of office shall be computed so as to include her/his tenure as Commissioner as well.</p>
              <p>7. Any person who possesses the following qualifications is eligible to be appointed as the Chief Election Commissioner
                or an Election Commissioner:-</p>
              <div className='pl-10 -mt-3 mb-3 flex flex-column'>
                <span>a. holds a Bachelor's Degree from a recognized university,</span>
                <span>b. is not a member of any political party immediately before the appointment;</span>
                <span>c. has attained the age of forty five, and</span>
                <span>d. possesses high moral character.</span>
              </div>
              <p>8. The remuneration and other conditions of service of the Chief Election Commissioner and the Election Commissioners
                shall be as determined by law. The remuneration and other conditions of service of the Chief Election Commissioner
                and the Election Commissioners shall not, so long as they hold office, be altered to their disadvantage.</p>
              <p>A person who has been the Chief Election Commissioner or the Election Commissioner shall not be eligible for
                appointment in other Government Services.</p>
            </div>
            <p>Provided that, nothing in this Clause shall be deemed to be a bar to the appointment to any political position or to
              any position which has the responsibility of making investigations, inquiries or findings on any subject, or to any
              position which has the responsibility of submitting advice, opinion or recommendation after carrying out a study or
              research on any subject.</p>
          </div>
          <div>
            <h4>Functions duties and, powers of Election Commission</h4>
            <div className='p-0 lg:pl-5 mb-3 flex flex-column'>
              <span>1.  The Election Commission shall, subject to this Constitution and other laws, conduct, supervise, direct and control the election of the President, the Vice-President, Federal Parliament, Provincial assemblies, and local bodies. The Election Commission shall be responsible for preparing the voters’ list for the purpose of election.</span>
              <span className='my-3'>2. The Election Commission shall hold referendum on subject of national importance as per this Constitution and Federal laws.</span>
              <span>3. If candidacy nominations have been registered for the election of the President, the Vice-President, the member of Federal Parliament and Provincial Assembly but a question arises before the completion of the election about the illegitimacy of a candidate, a final decision thereon shall be made by the Election Commission.</span>
              <span className='my-3'>4. The Election Commission may delegate any of its functions, duties and powers to the Chief Election Commissioner, Election Commissioner or any employee of the Government of Nepal to be exercised and followed in compliance with the conditions specified.</span>
              <span>5. Other functions, duties and powers and working procedures of the Election Commission shall be as regulated by law.</span>
            </div>
          </div>
          <div>
            <h4>Necessary Cooperation to be Extended</h4>
            <div className='p-0 lg:pl-5 mb-3 flex flex-column'>
              <span>The Government of Nepal, provincial government and local government shall provide necessary employees and extend other
                cooperation as may be required to perform the functions of the Election Commission in accordance with this Constitution.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstitutionalProvision;