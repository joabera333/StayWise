import {
	QueryClient,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
	const queryClient = useQueryClient();

	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		//mutationFn: (newCabin) => createCabin(newCabin),
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onSuccess: () => {
			toast.success("Cabin successfully edited");
			QueryClient.invalidateQueries({ queryKey: ["cabins"] });
		},

		onError: (err) => toast.error(err.message),
	});

	return { isEditing, editCabin };
}
