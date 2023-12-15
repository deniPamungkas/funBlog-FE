import { useEffect, useRef, useState } from "react";
import Button from "../components/button/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Alert } from "@mui/material";
import { useParams } from "react-router";

const Write = () => {
  //HANDLE ALERT MESSAGE
  const [message, setMessage] = useState(null);

  //HANDLE FORM STATE
  const [dataPost, setDataPost] = useState({
    title: "",
    postPic: "",
    content: "",
    category: "",
  });
  const handleChange = (e) => {
    if (e.target.value == "")
      return setDataPost({ ...dataPost, [e.target.name]: "" });
    if (e.target.name == "postPic") {
      setFile(e.target.files[0]);
      return setDataPost({
        ...dataPost,
        [e.target.name]: e.target.files[0].name,
      });
    }
    setDataPost({ ...dataPost, [e.target.name]: e.target.value });
  };
  const params = useParams();
  useEffect(() => {
    const getPost = async () => {
      if (params.post_id != "0") {
        try {
          const response = await axios.get(
            "https://api-fun-blog-deni-pamungkas.vercel.app/post/getOnePost/" +
              params.post_id,
            { withCredentials: true }
          );
          setDataPost(response.data);
          return response;
        } catch (error) {
          console.log(error);
        }
      }
    };
    getPost();
  }, [params.post_id]);
  //HANDLE UPLOAD FILE
  const [file, setFile] = useState("");
  const fileRef = useRef();
  const uploadFile = async (e) => {
    const upload = new FormData();
    upload.append("file", e);
    try {
      if (file) {
        const response = await axios.post(
          "https://api-fun-blog-deni-pamungkas.vercel.app/file/uploadFile",
          upload
        );
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //HANDLE SUBMIT FORM DAN HIT API
  const handleSubmitPost = async (e) => {
    e.preventDefault();
    try {
      //VALIDATION CONTENT
      if (dataPost.content == null || "")
        return setMessage({
          warning: true,
          message: "content tidak boleh kosong",
        });
      //HIT API
      uploadFile(file);
      if (e.nativeEvent.submitter.name == "save") {
        if (params.post_id != "0") {
          await axios.patch(
            "https://api-fun-blog-deni-pamungkas.vercel.app/post/updatePost/" +
              params.post_id,
            { ...dataPost, draft: true },
            {
              withCredentials: true,
            }
          );
          setTimeout(() => {
            window.location.pathname = `/dashboard`;
          }, 2000);
          return setMessage({ message: "Saved to draft" });
        }
        await axios.post(
          "https://api-fun-blog-deni-pamungkas.vercel.app/post/makePost",
          { ...dataPost, draft: true },
          {
            withCredentials: true,
          }
        );
        setTimeout(() => {
          window.location.pathname = `/dashboard`;
        }, 2000);
        return setMessage({ message: "Saved to draft" });
      } else if (e.nativeEvent.submitter.name == "publish") {
        if (params.post_id != "0") {
          await axios.patch(
            "https://api-fun-blog-deni-pamungkas.vercel.app/post/updatePost/" +
              params.post_id,
            { ...dataPost, draft: false },
            {
              withCredentials: true,
            }
          );
          setTimeout(() => {
            window.location.pathname = `/dashboard`;
          }, 2000);
          return setMessage({ message: "Published" });
        }
        await axios.post(
          "https://api-fun-blog-deni-pamungkas.vercel.app/post/makePost",
          { ...dataPost, draft: false },
          {
            withCredentials: true,
          }
        );
        setTimeout(() => {
          window.location.pathname = `/dashboard`;
        }, 2000);
        return setMessage({ message: "Published" });
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <section className="min-h-screen bg-slate-200 dark:bg-gray-800 p-5 md:px-20 lg:px-52 xl:px-96 2xl:w-3/5 2xl:m-auto">
      <form
        className=" w-full h-full flex flex-col gap-y-5 mb-10"
        onSubmit={handleSubmitPost}
      >
        <input
          type="text"
          name="title"
          value={dataPost?.title}
          placeholder="title post"
          className="w-full h-10 bg-white px-3 outline-none dark:bg-gray-300"
          onChange={handleChange}
          required
        />
        <input
          ref={fileRef}
          name="postPic"
          type="file"
          className="w-full h-content bg-white px-3 outline-none dark:bg-gray-300"
          onChange={handleChange}
        />
        {fileRef.current?.files[0] !== undefined ? (
          <img
            src={URL.createObjectURL(fileRef.current?.files[0])}
            alt="kosong"
            className="w-40 h-40 object-contain"
          />
        ) : params?.post_id != "0" && dataPost?.postPic != "" ? (
          <img
            src={
              "https://api-fun-blog-deni-pamungkas.vercel.appuploads/" +
              dataPost?.postPic
            }
            alt="kosong"
            className="w-40 h-40 object-contain"
          />
        ) : (
          ""
        )}
        <select
          value={dataPost?.category}
          name="category"
          id="category"
          className="outline-none"
          required
          onChange={handleChange}
        >
          <option value="">--select category--</option>
          <option value="tech">Tech</option>
          <option value="bussiness">Bussiness</option>
          <option value="politic">Politic</option>
          <option value="health">health</option>
          <option value="hobby">Hobby</option>
        </select>
        <ReactQuill
          value={dataPost?.content}
          onChange={(e) => {
            setDataPost({ ...dataPost, ["content"]: e });
          }}
          className="dark:bg-white"
          required
        />
        <div className="w-full flex flex-col gap-y-2 font-semibold text-white">
          <Button className="w-full bg-teal-500" type="submit" name="save">
            save
          </Button>
          <Button className="w-full bg-orange-600" type="submit" name="publish">
            save & publish
          </Button>
        </div>
      </form>
      {message && (
        <Alert
          sx={{ width: "90%", margin: "auto" }}
          severity={message.warning ? "warning" : "success"}
          onClose={() => {
            setMessage(null);
          }}
        >
          {message.message}
        </Alert>
      )}
    </section>
  );
};

export default Write;
