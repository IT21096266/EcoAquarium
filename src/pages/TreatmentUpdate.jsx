import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";
import Loader from "../components/UI/Loader";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import { storage } from "../services/firebase-config";
import treatment_data_services from "../services/treatment_services";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TreatmentUpdate = () => {

  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [message, setMessage] = useState({ error: false, msg: "" });

    const navigate = useNavigate();

    const uploadImage = (e) => {
        setLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/TreatmentImg/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const uploadProgress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error);
            setFields(true);
            setMsg("Error while uploading : Try Again");
            setAlertStatus("danger");
            setTimeout(() => {
              setFields(false);
              setLoading(false);
            }, 5000);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageAsset(downloadURL);
              setLoading(false);
              setFields(true);
              setMsg("Image Uploaded Successfully");
              setAlertStatus("success");
              setTimeout(() => {
                setFields(false);
              }, 5000);
            });
          }
        );
      };

    const deleteImage = () => {
        setLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
          setImageAsset(null);
          setLoading(false);
          setFields(true);
          setMsg("Image Delete Successfully");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 5000);
        });
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newTreatment = {
        id: `${Date.now()}`,
        product_name,
        description,
        
        imageAsset,
      };
      console.log(newTreatment);
      try {
        if (treatID !== undefined && treatID !== "") {
        await treatment_data_services.updateTreatment(treatID, newTreatment);
        alert("Treatment Updated successfully!");
          setLoading(false);
          setFields(true);
          setTimeout(() => {
            setFields(false);
            setImageAsset(null);
          }, 5000);
        } else {
            alert("Treatment Update FAILED!");
            navigate("/treatmentlist");
        }
        navigate("/treatmentlist");
      } catch (err) {
        setMessage({ error: false, msg: err.message });
      }
      };

    const resetForm = () => {
        setProduct_name("")
        setDescription("")
        
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
          setImageAsset(null);
          setLoading(false);
          setFields(true);
          setTimeout(() => {
            setFields(false);
          }, 5000);
        });
    }

  // -----------------------------------------------   Fetch data from firestore        -----------------------------------

    const { treatID } = useParams();
    console.log("Treatment ID: ", treatID);
    
    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await treatment_data_services.getTreatment(treatID);
        console.log("Got the Data: ", docSnap.data());
        setProduct_name(docSnap.data().product_name);
        setDescription(docSnap.data().description)
        
        setImageAsset(docSnap.data().imageAsset);
      } catch {}
    };
    useEffect(() => {
      console.log("Got ID: ", treatID);
      if (treatID !== undefined && treatID !== "") {
        editHandler();
        console.log("Check ", treatID);
      }
    }, [treatID]);

  return (
        <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Helmet title="Update Treatment">
            
    {/*--------------- Messages --------------*/}
                    {fields && (
                                    <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`w-full p2 rounded-lg text-center text-lg font-semibold ${
                                        alertStatus === "danger"
                                        ? "bg-alert-red text-black"
                                        : "bg-alert-green text-green-900"
                                    }`}
                                    >
                                    {msg}
                                    </motion.p>
                                )}

                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-black">
                                    Treatment
                                </h3>
                                <p className="mt-1 text-sm text-black">
                                    Update treatment name and the discription of the disease
                                </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                            <form
                      onSubmit={handleSubmit}
                      className="bg-box-gradient text-black"
                    >
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-5">
                              <label
                                htmlFor="treatment_name"
                                className="formLable"
                              >
                                Treatment Name
                              </label>
                              <input
                                type="text"
                                name="treatment_name"
                                id="treatment_name"
                                maxLength="30"
                                defaultValue={product_name}
                                onSelect={(e) => {
                                  setProduct_name(e.target.value);
                                }}
                                required
                                className={`${styles.ADtxt}`}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                              <label
                                htmlFor="treatment_description"
                                className="formLable"
                              >
                                Describe the Treatment
                              </label>
                              <textarea
                                type="text"
                                name="treatment_description"
                                id="treatment_description"
                                maxLength="300"
                                defaultValue={description}
                                onSelect={(e) => {
                                  setDescription(e.target.value);
                                }}
                                required
                                className={`${styles.TXTar}`}
                              ></textarea>
                            </div>

                            {/*-------------- Image Uploader -------------*/}
                            <div className="col-span-6 sm:col-span-3 lg:col-span-5">
                              <label htmlFor="treatment" className="formLable">
                                Upload Treatment Image
                              </label>
                              <div
                                className="mt-4 group flex justify-center flex-col border-2 border-dotted
                                border-gray-300 w-full h-100 md:h-300 cursor-pointer rounded-lg"
                              >
                                <div className="flex justify-center">
                                  {isLoading ? (
                                    <Loader />
                                  ) : (
                                    <>
                                      {!imageAsset ? (
                                        <>
                                          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                              <MdCloudUpload className="text-gray-400 text-[50px] hover:text-gray-600" />
                                              <p className="text-gray-400 hover:text-gray-600">
                                                {" "}
                                                Click here to Upload{" "}
                                              </p>
                                            </div>
                                            <input
                                              type="file"
                                              name="uploadimage"
                                              accept="image/*"
                                              onChange={uploadImage}
                                              className="w-0 h-0"
                                            />
                                          </label>
                                        </>
                                      ) : (
                                        <>
                                          <div className="relative h-full">
                                            <img
                                              src={imageAsset}
                                              alt="upload image"
                                              className="w-96 h-52 object"
                                            />
                                            <button
                                              type="button"
                                              onClick={deleteImage}
                                              className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer 
                                                            outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                                            >
                                              <MdDelete className="text-white" />
                                            </button>
                                          </div>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <div className="text-right grid grid-cols-7 gap-4 content-center ...">
                            <input
                              type="reset"
                              className={`${styles.ALbtn} font-semibold `}
                              value="Reset"
                              onClick={() => resetForm()}
                            />
                            <button
                              type="submit"
                              className={`${styles.ALbtn} font-semibold `}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                                </div>
                            </div>
                        </div>
                    </Helmet>
                </div>
            </div>
        </main>
    </div>
  )
}

export default TreatmentUpdate