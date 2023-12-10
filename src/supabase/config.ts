import { createClient } from "@supabase/supabase-js";

const supabaserURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

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
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
