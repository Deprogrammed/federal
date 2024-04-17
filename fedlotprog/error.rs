use anchor_lang::prelude::error_code;

#[error_code]
pub enum LotteryError {
    #[msg("Winner Already Exists")]
    WinnerAlreadyExists,
    #[msg("Cannot Find Winner - No Tickets")]
    NoTickets,
    #[msg("Winner Has Not Been Chose")]
    WinnerNotChose,
    #[msg("Invalid Winner")]
    InvalidWinner,
    #[msg("Prize Has Been Claimed Already")]
    AlreadyClaimed,
}
// UCC 1-308 Without Prejudice, Without Dishonor, Without Recourse $FED Reservation of Rights