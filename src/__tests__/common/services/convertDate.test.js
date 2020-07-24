import { convertDate, timeSince } from '../../../common/services/convertDate';

describe('convert date', () => {
  it('should convert some date', () => {
    const newDate = convertDate('1995-01-17T08:24:00.000Z');

    expect(newDate).toEqual('01/17/1995');
  });

  it('should convert some date 2', () => {
    const newDate = convertDate('1995-11-17T08:24:00.000Z');

    expect(newDate).toEqual('11/17/1995');
  });

  it('should list time since minutes', () => {
    let date = new Date();
    date.setMinutes(date.getMinutes() - 5);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('5 minutes ago');
  });

  it('should list time since seconds', () => {
    let date = new Date();
    date.setSeconds(date.getSeconds() - 5);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('5 seconds ago');
  });

  it('should list time since hours', () => {
    let date = new Date();
    date.setHours(date.getHours() - 5);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('5 hours ago');
  });

  it('should list time since days', () => {
    let date = new Date();
    date.setDate(date.getDate() - 2);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('2 days ago');
  });

  it('should list time since months', () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 2);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('2 months ago');
  });

  it('should list time since years', () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    const lastSince = timeSince(date.toISOString());
    expect(lastSince).toEqual('2 years ago');
  });

  it('should list time since 1 year', () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    const lastSince = timeSince(date);
    expect(lastSince).toEqual('1 year ago');
  });
});