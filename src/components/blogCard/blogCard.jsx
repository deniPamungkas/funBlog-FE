import { Modal } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../button/button";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import moment from "moment";

const BlogCard = (props) => {
  const [postId, setPostId] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    setPostId(e.target.parentElement.parentElement.id);
  };
  const handleClose = () => {
    setOpen(false);
    setPostId(null);
  };
  const handleDelete = () => {
    mutationDelete.mutate();
    handleClose();
  };
  const handleEdit = (e) => {
    window.location.pathname =
      "/write/" + e.target.parentElement.parentElement.id;
  };
  const queryClient = useQueryClient();
  const mutationDelete = useMutation(
    async () => {
      try {
        const response = await axios.delete(
          "https://api-fun-blog-deni-pamungkas.vercel.app/post/deletePost/" +
            postId,
          { withCredentials: true }
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["fetchMyPost"]);
      },
    }
  );
  const handleRead = (e) => {
    window.location.pathname =
      "/read/" + e.target.parentElement.parentElement.id;
  };
  return (
    <div
      className="w-full h-24 gap-x-1 flex dark:text-white lg:h-28"
      id={props.data._id}
    >
      <div className="w-3/4 h-full bg-gray-400 dark:bg-gray-800 flex flex-col justify-center px-3 lg:w-5/6">
        <h1
          className={` text-sm md:text-lg truncate font-semibold mb-1 ${
            props.data?.draft ? " cursor-default" : " cursor-pointer"
          }`}
          onClick={props.data?.draft ? null : handleRead}
        >
          {props.data.title}
        </h1>
        <div className="text-xs flex items-center gap-x-2">
          {props.data?.draft ? (
            <div className=" bg-gray-300 dark:bg-gray-700 p-1 text-red-400 font-semibold">
              Draft
            </div>
          ) : (
            <div className=" bg-gray-300 dark:bg-gray-700 p-1 text-green-600 dark:text-green-400 font-semibold">
              Published
            </div>
          )}
          <p>{moment(props.data?.createdAt).fromNow()}</p>
        </div>
      </div>
      <div className="w-1/4 h-full gap-y-1 flex flex-col text-xs lg:w-1/6">
        <button
          className="w-full h-1/2 bg-gray-400 dark:bg-gray-800 flex justify-center items-center font-semibold"
          onClick={handleEdit}
        >
          EDIT
        </button>
        <button
          className="w-full h-1/2 bg-gray-400 dark:bg-gray-800 flex justify-center items-center font-semibold"
          onClick={handleOpen}
        >
          DELETE
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-80 h-72 md:w-96 md:h-72 bg-white m-auto mt-40 px-5 py-10 md:p-10 relative">
          <button
            onClick={handleClose}
            className="font-semibold absolute right-2 top-2 w-7 h-7 flex justify-center items-center rounded-full"
          >
            X
          </button>
          <h1 className="text-xl md:text-2xl font-semibold mb-5">
            Are you sure wants to delete this post?
          </h1>
          <p className="text-xs md:text-sm">
            you can edit the post if you dont like the post content
          </p>
          <div className="flex mt-10 font-semibold gap-x-5 text-sm">
            <Button
              onClick={handleDelete}
              className="bg-emerald-400 rounded-sm"
            >
              Delete
            </Button>
            <Button onClick={handleClose} className="text-gray-500">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

BlogCard.propTypes = {
  data: PropTypes.any,
};

export default BlogCard;
