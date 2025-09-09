import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
	const queryClient = useQueryClient();
	const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: deleteBookingApi,
		onSuccess: () => {
			toast.success("booking successfully deleted");
			queryClient.invalidateQueries({
				queryKey: ["booking"],
			});
		},

		onError: (err) => toast.err(err.message),
	});

	return { isDeleting, deleteBooking };
}
