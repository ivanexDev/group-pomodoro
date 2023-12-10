import { createClient } from "@supabase/supabase-js";

const supabaserURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoam11dWptcWZja3BxZ2JudGRkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjE2NjgzMiwiZXhwIjoyMDE3NzQyODMyfQ.cXlhQqrl5O1vKteHcJGR0iFiFFWf7TEJv9qVk06MJr0"

export const supabase = createClient(supabaserURL, supabaseAnonKey);

export const dataMessages = null;

//Enviar mensaje

export async function setSupabaseTimer(state: boolean, time: string) {
	try {
		const { error } = await supabase
			.from("pomodoro-timer")
			.insert([
				{
					state,
					time,
				},
			])
			.single();
		if (error) throw error;
	} catch (error: unknown) {
		if(error instanceof Error){
			console.log(error.message)
		}
	}
}