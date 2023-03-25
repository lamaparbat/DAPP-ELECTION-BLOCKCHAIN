import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { registerParty } from '../../utils/action';
import { SmartContract } from '../../constants';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { getStorage } from '../../services';
import _ from 'lodash';
import { getFormattedErrorMessage, getPartyList } from '../../utils';
import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultPartyDetails = { partyName: "", totalMembers: '', agenda: "", partyLogo: null }

const VoterRegistration = () => {
  const [partyDetails, setPartyDetails] = useState({ ...defaultPartyDetails });
  const [partyList, setPartyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const loggedInAccountAddress = getStorage("loggedInAccountAddress");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getPartyList();
      setPartyList(res);
    })();

    (!partyDetails.partyName || !partyDetails.totalMembers
      || !partyDetails.agenda) ? setDisabled(true) : setDisabled(false);
  }, [partyDetails]);

  const onChange = (name, value) => {
    setPartyDetails({ ...partyDetails, [name]: value })
  }

  // upload partyDetails
  const onSubmit = async () => {
    setLoading(true);
    try {
      // check if party already exists
      const isExits = _.includes(partyList, (party: any) => party.name === partyDetails.partyName);
      if (isExits) return toast.error("Party already exists on given name !");

      const formData = new FormData();
      const { partyName, totalMembers, agenda, partyLogo } = partyDetails;

      formData.append("partyName", partyName);
      formData.append("totalMembers", totalMembers);
      formData.append("agenda", agenda);
      formData.append("logo", partyLogo);

      const res1: any = await registerParty(formData);
      const { logo } = res1.data.data;

      if (!logo) throw new Error("Failed to upload logo !");

      const res2 = await SmartContract.methods.addParty(
        partyName,
        totalMembers,
        agenda,
        logo
      ).send({ from: loggedInAccountAddress });

      if (res1.data.data && res2) {
        toast.success("New Party Registered successfully.", { toastId: 2 });
        setPartyDetails(defaultPartyDetails)
      } else throw new Error();
    } catch (error) {
      const erroMsg = getFormattedErrorMessage(error.message);
      console.log(erroMsg);
      toast.error(`Failed to register !, ${erroMsg}`, { toastId: 2 });
    }
    setLoading(false);
  }

  return (
    <div className='mb-[50px]'>
      <Head>
        <title>Party Registration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar /><br />
      <div className='w-full flex justify-center'>
        <div className={`px-5 pt-4 pb-5 w-[550px] h-fit flex-col justify-between rounded-[2px] flex-wrap text-[15px] bg-slate-100 shadow-sm`}>
          <h4 className='mt-2 mb-4'>Fillup Details</h4>
          <div className='flex justify-between'>
            <div className='w-100 text-[15px]'>
              <span>Party Name</span>
              <input
                className='overrideInputStyle form-control px-3 py-[10px] rounded-1 mt-1'
                type="text"
                onChange={(e) => onChange("partyName", e.target.value)}
              />
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='w-100 text-[15px]'>
              <span>Total Members</span>
              <input
                className='overrideInputStyle form-control px-3 py-[10px] rounded-1 mt-1'
                type="number"
                placeholder='0'
                onChange={(e) => onChange("totalMembers", e.target.value)}
              />
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='w-100 text-[15px]'>
              <span>Party Agenda</span>
              <textarea
                className='overrideInputStyle form-control h-[150px] px-3 py-[10px] rounded-1 mt-1'
                placeholder='Brief description of party agenda'
                value={partyDetails.agenda}
                onChange={(e) => onChange("agenda", e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='w-100'>
              <span>Choose Party Logo</span>
              <input
                className='overrideInputStyle form-control py-[10px] rounded-1 mt-1'
                type="file"
                name="logo"
                onChange={(e) => onChange("partyLogo", e.target.files[0])}
              />
            </div>
          </div>
          <div className='flex justify-between mt-[30px] mb-1'>
            <button
              className={`bg-blue-900 text-light py-2 w-100 rounded-[5px] hover:opacity-75 flex justify-center items-center ${(disabled || loading) && 'opacity-75 cursor-default'}`}
              onClick={onSubmit}
              disabled={disabled || loading}
            >
              {loading ? "Saving" : "Register"}
              {loading && <PulseLoader color='white' size={9} className='ml-4' />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoterRegistration;


export const getServerSideProps = async (ctx) => {
  try {
    const {cookie} = ctx.req.headers
    const isAdmin = cookie.split(";")?.find((d:string) => d.includes("isAdmin"))?.split("=")[1] ?? "false";

    if(isAdmin === "false") {
      return {
        redirect: { 
          parmanent: false,
          destination:"/"
        }
      }
    }
  
  } catch (error) {
    return {props: {}}
  }
  return {props: {}}
}


